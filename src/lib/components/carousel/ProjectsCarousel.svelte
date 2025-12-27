<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import ProjectCard from './ProjectCard.svelte'; // ajusta la ruta si hace falta

	export interface Project {
		id: number;
		title: string;
		subtitle: string;
		meta: string;
		description: string;
		imageUrl: string;
	}

	export let projects: Project[] = [];

	let container: HTMLDivElement | null = null;
	let slideEls: (HTMLDivElement | null)[] = [];
	let hasOverflow = false;
	let resizeObserver: ResizeObserver | null = null;

	let activeIndex = 0;
	let isDesktop = false;

	const clampIndex = (index: number) => Math.max(0, Math.min(projects.length - 1, index));

	const updateIsDesktop = () => {
		if (typeof window === 'undefined') return;
		isDesktop = window.innerWidth >= 1024;
	};

	const goToIndex = (index: number) => {
		if (!container || !projects.length) return;

		const targetIndex = clampIndex(index);
		const targetEl = slideEls[targetIndex];

		if (targetEl) {
			const slideCenter = targetEl.offsetLeft + targetEl.clientWidth / 2;
			const targetOffset = slideCenter - container.clientWidth / 2;

			const maxScroll = container.scrollWidth - container.clientWidth;
			const clampedOffset = Math.max(0, Math.min(targetOffset, Math.max(0, maxScroll)));

			container.scrollTo({
				left: clampedOffset,
				behavior: 'smooth'
			});
		}

		activeIndex = targetIndex;
	};

	const goPrev = () => goToIndex(activeIndex - 1);
	const goNext = () => goToIndex(activeIndex + 1);

	const checkOverflow = () => {
		if (!container) return;
		hasOverflow = container.scrollWidth > container.clientWidth + 2;
	};

	const updateActiveFromScroll = () => {
		if (!container || !slideEls.length) return;

		const center = container.scrollLeft + container.clientWidth / 2;
		let closestIndex = 0;
		let minDistance = Infinity;

		slideEls.forEach((el, index) => {
			if (!el) return;
			const slideCenter = el.offsetLeft + el.clientWidth / 2;
			const distance = Math.abs(slideCenter - center);
			if (distance < minDistance) {
				minDistance = distance;
				closestIndex = index;
			}
		});

		activeIndex = closestIndex;
	};

	let ticking = false;

	const handleScroll = () => {
		if (!container) return;

		if (!ticking) {
			ticking = true;
			requestAnimationFrame(() => {
				updateActiveFromScroll();
				ticking = false;
			});
		}
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (!hasOverflow) return;

		if (event.key === 'ArrowRight') {
			event.preventDefault();
			goNext();
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			goPrev();
		}
	};

	const handleResize = () => {
		checkOverflow();
		updateActiveFromScroll();
		updateIsDesktop();
	};

	// Hover en desktop → cambia solo descripción / borde activo
	const handleCardMouseEnter = (index: number) => {
		if (!isDesktop) return;
		activeIndex = clampIndex(index);
	};

	// Click → centra la tarjeta y actualiza descripción
	const handleCardClick = (index: number) => {
		goToIndex(index);
	};

	// Action para registrar slides
	function registerSlide(node: HTMLDivElement, index: number) {
		slideEls[index] = node;
		return {
			destroy() {
				slideEls[index] = null;
			}
		};
	}

	onMount(() => {
		updateIsDesktop();
		checkOverflow();

		if (typeof ResizeObserver !== 'undefined' && container) {
			resizeObserver = new ResizeObserver(() => {
				checkOverflow();
				updateActiveFromScroll();
				updateIsDesktop();
			});
			resizeObserver.observe(container);
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}
	});

	onDestroy(() => {
		if (resizeObserver && container) {
			resizeObserver.unobserve(container);
		}

		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', handleResize);
		}
	});

	$: activeProject = projects[activeIndex];
</script>

<section class="projects-section">
	<div class="section-inner">
		<header class="section-header">
			<h2 class="section-title">Proyectos completos</h2>
			<p class="section-subtitle">De la compra a la entrega de llaves</p>
		</header>

		<div
			class="carousel-wrapper"
			tabindex="0"
			aria-label="Carrusel de proyectos completos"
			on:keydown={handleKeydown}
		>
			<button
				type="button"
				class="nav-button nav-left"
				on:click={goPrev}
				aria-label="Ver proyectos anteriores"
				class:nav-disabled={!hasOverflow}
			>
				<span aria-hidden="true">‹</span>
			</button>

			<div class="slides" bind:this={container} on:scroll={handleScroll}>
				{#each projects as project, index (project.id)}
					<div
						class="slide"
						use:registerSlide={index}
						on:mouseenter={() => handleCardMouseEnter(index)}
						on:click={() => handleCardClick(index)}
					>
						<ProjectCard {project} isActive={index === activeIndex} />
					</div>
				{/each}
			</div>

			<button
				type="button"
				class="nav-button nav-right"
				on:click={goNext}
				aria-label="Ver proyectos siguientes"
				class:nav-disabled={!hasOverflow}
			>
				<span aria-hidden="true">›</span>
			</button>
		</div>

		{#if projects.length}
			<div class="project-description-wrapper">
				{#each projects as project, index (project.id)}
					<p
						class="project-description-text"
						class:visible={index === activeIndex}
						aria-hidden={index === activeIndex ? 'false' : 'true'}
					>
						{project.description}
					</p>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.projects-section {
		background-color: var(--color-bg);
		padding: 2.5rem var(--page-padding-x) 3.5rem;
		font-family: var(--font-sans);
	}

	@media (min-width: 768px) {
		.projects-section {
			padding: 3rem var(--page-padding-x) 4rem;
		}
	}

	.section-inner {
		max-width: var(--layout-max-width);
		margin: 0 auto;
	}

	.section-header {
		margin-bottom: 2rem;
	}

	.section-title {
		font-size: clamp(1.8rem, 3vw, 2.4rem);
		line-height: 1.1;
		font-weight: 700;
		color: var(--color-text);
		margin: 0 0 0.5rem;
		padding-top: 2rem;
	}

	.section-subtitle {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		margin: 0;
	}

	@media (min-width: 768px) {
		.section-header {
			margin-bottom: 2.5rem;
		}

		.section-subtitle {
			font-size: 1rem;
		}
	}

	.carousel-wrapper {
		position: relative;
		outline: none;
	}

	.slides {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x proximity;
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
		gap: 1.25rem;
		padding: 0.25rem 7.5% 0.75rem; /* lateral para centrar 1ª/última en mobile (85%) */
	}

	@media (min-width: 480px) {
		.slides {
			padding-inline: 10%; /* slide ≈ 80% → (100-80)/2 */
		}
	}

	@media (min-width: 768px) {
		.slides {
			gap: 1.5rem;
			padding-inline: 0.25rem;
		}
	}

	.slides::-webkit-scrollbar {
		height: 6px;
	}

	.slides::-webkit-scrollbar-track {
		background: transparent;
	}

	.slides::-webkit-scrollbar-thumb {
		background: rgba(156, 163, 175, 0.4);
		border-radius: 999px;
	}

	.slide {
		flex: 0 0 85%;
		min-width: 0;
		scroll-snap-align: center;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}

	@media (min-width: 480px) {
		.slide {
			flex-basis: 80%;
		}
	}

	@media (min-width: 768px) {
		.slide {
			flex-basis: calc(50% - 0.75rem);
			scroll-snap-align: start;
		}
	}

	@media (min-width: 1024px) {
		.slide {
			flex-basis: calc(33.3333% - 1rem);
		}
	}

	/* ====== BOTONES ====== */

	.nav-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		inline-size: 2.8rem;
		block-size: 2.8rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-pill);
		border: 1px solid var(--color-border-subtle);
		background-color: var(--color-card);
		box-shadow: var(--shadow-soft);
		padding: 0;
		cursor: pointer;
		transition:
			background-color 0.2s ease,
			box-shadow 0.2s ease,
			transform 0.2s ease,
			opacity 0.2s ease,
			border-color 0.2s ease;
		z-index: 10;
	}

	.nav-button span {
		font-size: 1.35rem;
		line-height: 1;
		color: var(--color-text);
	}

	.nav-button:hover {
		background-color: var(--accent-soft);
		border-color: var(--accent-strong);
		box-shadow: var(--shadow-elevated);
		transform: translateY(-50%) translateY(-1px);
	}

	.nav-button:active {
		transform: translateY(-50%);
		box-shadow: var(--shadow-soft);
	}

	.nav-button:focus-visible {
		outline: 2px solid var(--accent-strong);
		outline-offset: 2px;
	}

	.nav-left {
		left: 0.4rem;
	}

	.nav-right {
		right: 0.4rem;
	}

	@media (max-width: 767px) {
		.nav-button {
			inline-size: 2.7rem;
			block-size: 2.7rem;
		}

		.nav-left {
			left: 0.25rem;
		}

		.nav-right {
			right: 0.25rem;
		}
	}

	@media (min-width: 1024px) {
		.nav-left {
			left: -1.3rem;
		}

		.nav-right {
			right: -1.3rem;
		}
	}

	.nav-disabled {
		opacity: 0;
		pointer-events: none;
	}

	/* ====== DESCRIPCIÓN FUERA ====== */

	.project-description-wrapper {
		margin-top: 1.25rem;
		position: relative;
		min-height: 3.5rem;
	}

	.project-description-text {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--color-text-muted);
		opacity: 0;
		transform: translateY(4px);
		transition:
			opacity 200ms ease,
			transform 200ms ease;
		pointer-events: none;
	}

	.project-description-text.visible {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}

	@media (min-width: 768px) {
		.project-description-wrapper {
			margin-top: 1.5rem;
			min-height: 4rem;
		}

		.project-description-text {
			font-size: 0.95rem;
		}
	}
</style>
