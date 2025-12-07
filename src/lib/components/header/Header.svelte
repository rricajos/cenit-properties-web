<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	import NavLinks, { type NavLink } from './NavLinks.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	export let links: NavLink[] = [
		{ href: '#servicios', label: 'Servicios' },
		{ href: '#proyectos', label: 'Proyectos' },
		{ href: '#contacto', label: 'Contacto' }
	];

	let headerEl: HTMLElement;

	function updateHeaderOffset() {
		if (!headerEl) return;
		const h = headerEl.offsetHeight;
		document.documentElement.style.setProperty('--header-offset', `${h}px`);
	}

	onMount(() => {
		updateHeaderOffset();

		const resizeHandler = () => updateHeaderOffset();
		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	});

	function scrollToContact(event: MouseEvent) {
		event.preventDefault();
		const section = document.querySelector<HTMLElement>('#contacto');
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<header class="site-header" bind:this={headerEl}>
	<div class="site-header__inner">
		<Logo />

		<nav class="site-header__nav" aria-label="Navegación principal">
			<NavLinks {links} orientation="horizontal" />
		</nav>

		<div class="site-header__cta-wrapper">
			<Button variant="primary" size="md" on:click={scrollToContact}>Solicitar Consulta</Button>
		</div>
	</div>
</header>

<style>
	.site-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 40;
		background: var(--color-bg);
		backdrop-filter: blur(6px);
		border-bottom: 1px solid rgba(0, 0, 0, 0.04);
		box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
	}

	.site-header__inner {
		max-width: var(--layout-max-width);
		margin: 0 auto;
		padding-inline: var(--page-padding-x);
		padding-block: 0.55rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.site-header__nav {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.site-header__nav :global(.nav-links) {
		align-items: center;
		gap: 2.25rem;
	}

	.site-header__nav :global(.nav-links__link) {
		font-size: 0.95rem;
		font-weight: 500;
	}

	/* Solo layout, el botón hereda todo su estilo de Button.svelte */
	.site-header__cta-wrapper {
		flex-shrink: 0;
	}

	/* MOBILE */
	@media (max-width: 767px) {
		.site-header__inner {
			padding-block: 0.6rem;
			padding-inline: 1.5rem; /* el que viste que cuadra bien */
		}

		.site-header__nav {
			display: none; /* solo logo + CTA en móvil */
		}
	}

	/* DESKTOP */
	@media (min-width: 768px) {
		.site-header__inner {
			padding-block: 0.8rem;
		}
	}
</style>
