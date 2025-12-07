<script lang="ts">
	import Logo from './Logo.svelte';
	import NavLinks, { type NavLink } from './NavLinks.svelte';

	export let links: NavLink[] = [
		{ href: '#servicios', label: 'Servicios' },
		{ href: '#proyectos', label: 'Proyectos' },
		{ href: '#contacto', label: 'Contacto' }
	];
</script>

<header class="site-header">
	<div class="site-header__inner">
		<Logo />

		<nav class="site-header__nav" aria-label="Navegación principal">
			<NavLinks {links} orientation="horizontal" />
		</nav>

		<a href="#contacto" class="btn btn-primary site-header__cta"> Solicitar Consulta </a>
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
		border-bottom: 1px solid rgba(0, 0, 0, 0.03);
	}

	.site-header__inner {
		max-width: var(--layout-max-width);
		margin: 0 auto;
		padding-inline: var(--page-padding-x);
		padding-block: 0.6rem;
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	/* logo left – nav center – cta right */
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

	/* CTA: solo layout, la estética viene de .btn .btn-primary global */
	.site-header__cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		white-space: nowrap;
	}

	.site-header__cta:hover,
	.site-header__cta:focus-visible {
		opacity: 0.92;
	}

	/* ===== MOBILE ===== */
	@media (max-width: 767px) {
		.site-header__inner {
			padding-block: 0.55rem;
			gap: 0.6rem;
		}

		/* Solo logo + botón, nav oculto */
		.site-header__nav {
			display: none;
		}

		:global(.logo__text) {
			font-size: 1rem;
		}
	}

	/* ===== DESKTOP ===== */
	@media (min-width: 768px) {
		.site-header__inner {
			padding-block: 0.9rem;
		}
	}
</style>
