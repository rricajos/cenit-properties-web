<script lang="ts">
	import { onMount } from 'svelte';

	export let primaryLabel = 'Ver servicios';
	export let primaryHref = '#servicios';

	export let secondaryLabel = 'Contactar';
	export let secondaryHref = '#contacto';

	const MOBILE_BREAKPOINT = 768;

	let isFloating = false;
	let el: HTMLDivElement;
	let absoluteTop = 0; // top absoluto del sticky en el documento

	function setInitialAbsoluteTop() {
		if (!el) return;

		const barHeight = el.offsetHeight;
		const marginBottom = 12; // ~0.75rem

		absoluteTop = window.innerHeight - barHeight - marginBottom;
		el.style.setProperty('--sticky-cta-absolute-top', `${absoluteTop}px`);
	}

	function updatePosition() {
		if (window.innerWidth >= MOBILE_BREAKPOINT) {
			isFloating = false;
			return;
		}

		if (absoluteTop <= 0) {
			isFloating = false;
			return;
		}

		isFloating = window.scrollY >= absoluteTop;
	}

	onMount(() => {
		setInitialAbsoluteTop();
		updatePosition();

		const onResize = () => {
			setInitialAbsoluteTop();
			updatePosition();
		};

		window.addEventListener('scroll', updatePosition, { passive: true });
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('scroll', updatePosition);
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<div
	bind:this={el}
	class={`sticky-cta ${isFloating ? 'sticky-cta--floating' : 'sticky-cta--docked'}`}
>
	<a href={primaryHref} class="btn btn-primary sticky-cta__btn">
		{primaryLabel}
	</a>

	<a href={secondaryHref} class="btn btn-outline sticky-cta__btn">
		{secondaryLabel}
	</a>
</div>

<style>
	.sticky-cta {
		z-index: 60;

		display: flex;
		gap: 0.75rem;
		align-items: center;
		justify-content: center;

		padding: 0.55rem 0.9rem;
		border-radius: 999px;

		background: var(--sticky-cta-bg, rgba(249, 248, 254, 0.94));
		backdrop-filter: blur(16px);
		box-shadow: var(--shadow-elevated);

		max-width: calc(var(--layout-max-width) + 2 * var(--page-padding-x));
		margin-inline: auto;
	}

	/* Estado base: anclada en el documento */
	.sticky-cta--docked {
		position: absolute;
		left: 0;
		right: 0;
		top: var(--sticky-cta-absolute-top, 0px);
	}

	/* Estado flotante: pegada arriba del viewport */
	.sticky-cta--floating {
		position: fixed;
		left: 0;
		right: 0;
		top: env(safe-area-inset-top, 0px); /* efectivamente es 0, pero respeta notch */
	}

	.sticky-cta__btn {
		flex: 1;
		text-align: center;
		white-space: nowrap;
	}

	@media (min-width: 768px) {
		.sticky-cta {
			display: none;
		}
	}
</style>
