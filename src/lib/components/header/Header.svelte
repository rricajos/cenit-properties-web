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

	// ¿header fijo? si lo necesitas
	export let sticky = true;

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<header class="site-header" class:site-header--sticky={sticky}>
	<div class="site-header__inner">
		<Logo />

		<!-- navegación escritorio -->
		<nav class="site-header__nav site-header__nav--desktop" aria-label="Navegación principal">
			<NavLinks {links} orientation="horizontal" />
		</nav>

		<!-- botón hamburguesa móvil -->
		<div class="site-header__hamburger">
			<HamburgerButton open={isOpen} on:click={toggleMenu} />
		</div>
	</div>

	<!-- menú móvil desplegable -->
	<nav
		class="site-header__nav site-header__nav--mobile"
		class:site-header__nav--mobile-open={isOpen}
		aria-label="Navegación principal móvil"
	>
		<NavLinks {links} orientation="vertical" on:linkClick={closeMenu} />
	</nav>
</header>

<style>
	.site-header {
		position: relative;
		z-index: 20;
		padding: 1.25rem 1.5rem;
	}

	.site-header--sticky {
		position: sticky;
		top: 0;
		backdrop-filter: blur(8px);
	}

	.site-header__inner {
		max-width: 1180px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.site-header__nav--desktop {
		display: none;
	}

	.site-header__hamburger {
		display: inline-flex;
	}

	/* móvil: el nav se despliega debajo */
	.site-header__nav--mobile {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.2s ease;
	}

	.site-header__nav--mobile-open {
		max-height: 300px; /* suficiente para los enlaces */
	}

	@media (min-width: 768px) {
		.site-header {
			padding-inline: 2.5rem;
			padding-top: 1.75rem;
		}

		.site-header__nav--desktop {
			display: block;
		}

		.site-header__hamburger {
			display: none;
		}

		.site-header__nav--mobile {
			display: none;
		}
	}
</style>
