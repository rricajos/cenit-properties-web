<script lang="ts">
	import Logo from './Logo.svelte';
	import HamburgerButton from './HamburgerButton.svelte';
	import NavLinks, { type NavLink } from './NavLinks.svelte';

	export let links: NavLink[] = [
		{ href: '#proyectos', label: 'Proyectos' },
		{ href: '#servicios', label: 'Servicios' },
		{ href: '#equipo', label: 'Equipo' },
		{ href: '#contacto', label: 'Contacto' }
	];

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<header class="site-header" data-open={isOpen}>
	<!-- BARRA SUPERIOR (logo + nav desktop) -->
	<div class="site-header__top-bar">
		<div class="site-header__inner site-header__inner--top">
			<Logo />

			<nav class="site-header__nav-desktop" aria-label="Navegación principal">
				<NavLinks {links} orientation="horizontal" />
			</nav>
		</div>
	</div>

	<!-- BARRA INFERIOR FIJA (solo móviles) -->
	<div class="site-header__bottom-bar">
		<div class="site-header__inner site-header__inner--bottom">
			<button class="site-header__cta" type="button"> Contactar </button>

			<div class="site-header__hamburger">
				<HamburgerButton open={isOpen} on:toggle={toggleMenu} />
			</div>
		</div>
	</div>

	<!-- OVERLAY CON BLUR (móvil) -->
	<div
		class="site-header__overlay"
		class:site-header__overlay--visible={isOpen}
		on:click={closeMenu}
	></div>

	<!-- MENÚ MÓVIL: SE DESPLIEGA DESDE ABAJO -->
	<nav
		class="site-header__nav-mobile"
		class:site-header__nav-mobile--open={isOpen}
		aria-label="Navegación principal móvil"
	>
		<NavLinks {links} orientation="vertical" on:linkClick={closeMenu} />
	</nav>
</header>

<style>
	:global(:root) {
		--bottom-nav-height: 64px;
	}

	.site-header {
		width: 100%;
		z-index: 40;
	}

	/* -------- BARRA SUPERIOR -------- */

	.site-header__top-bar {
		background: var(--color-bg);
		backdrop-filter: blur(4px);
		border-bottom: 0px solid var(--color-text-muted);
		position: sticky;
		top: 0;
		z-index: 40;
	}

	.site-header__inner {
		max-width: 1180px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.site-header__inner--top {
		padding-block: 0.9rem;
	}

	/* nav escritorio por defecto oculto (solo se mostrará en desktop) */
	.site-header__nav-desktop {
		display: none;
	}

	.site-header__nav-desktop :global(.nav-links) {
		align-items: center;
	}

	.site-header__nav-desktop :global(.nav-links__link) {
		font-size: 0.95rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* -------- BARRA INFERIOR (MÓVIL) -------- */

	.site-header__bottom-bar {
		display: none; /* solo en móviles */
	}

	.site-header__inner--bottom {
		height: 100%;
		padding-block: 0.4rem 0.6rem;
	}

	.site-header__cta {
		border: 1px solid currentColor;
		background: transparent;
		padding: 0.45rem 0.9rem;
		border-radius: 999px;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		white-space: nowrap;
	}

	.site-header__hamburger {
		display: inline-flex;
	}

	/* -------- OVERLAY & MENÚ MÓVIL (bottom sheet) -------- */

	.site-header__overlay {
		display: none; /* se activa en móviles */
	}

	.site-header__nav-mobile {
		display: none; /* se activa en móviles */
	}

	/* -------- DESKTOP -------- */

	@media (min-width: 768px) {
		.site-header__inner {
			padding: 2.5rem;
		}

		.site-header__nav-desktop {
			display: block;
		}
	}

	/* -------- MÓVILES -------- */
	@media (max-width: 767px) {
		/* barra inferior fija al fondo */
		.site-header__bottom-bar {
			display: block;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			height: var(--bottom-nav-height);
			background: var(--color-bg);
			backdrop-filter: blur(4px);
			border-top: 1px solid var(--color-text-muted);
			z-index: 50;
		}

		/* overlay entre contenido y barra inferior */
		.site-header__overlay {
			display: block;
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: var(--bottom-nav-height);
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.2s ease;
			z-index: 48;
		}

		.site-header__overlay--visible {
			opacity: 1;
			pointer-events: auto;
			backdrop-filter: blur(8px);
			background: rgba(0, 0, 0, 0.25);
		}

		/* menú tipo bottom sheet */
		.site-header__nav-mobile {
			display: block;
			position: fixed;
			left: 0;
			right: 0;
			bottom: var(--bottom-nav-height);
			background: var(--color-bg);
			transform: translateY(100%);
			transition: transform 0.25s ease;
			z-index: 49;
		}

		.site-header__nav-mobile--open {
			transform: translateY(0);
		}

		.site-header__nav-mobile :global(.nav-links) {
			padding: 1.25rem 1.5rem 1.75rem;
		}

		.site-header__nav-mobile :global(.nav-links__link) {
			font-size: 1.05rem;
		}
	}
</style>
