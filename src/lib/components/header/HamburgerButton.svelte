<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let open = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('toggle'); // avisamos al padre
	}
</script>

<button
	type="button"
	class="hamburger {open ? 'hamburger--open' : ''}"
	aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
	aria-expanded={open}
	on:click={handleClick}
>
	<span class="hamburger__line"></span>
	<span class="hamburger__line"></span>
	<span class="hamburger__line"></span>
</button>

<style>
	.hamburger {
		border: none;
		background: none;
		padding: 0.25rem;
		cursor: pointer;
		display: inline-flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.hamburger__line {
		width: 1.5rem;
		height: 2px;
		background: currentColor;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
	}

	/* estado abierto tipo "X" */
	.hamburger--open .hamburger__line:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}

	.hamburger--open .hamburger__line:nth-child(2) {
		opacity: 0;
	}

	.hamburger--open .hamburger__line:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	@media (min-width: 768px) {
		.hamburger {
			display: none;
		}
	}
</style>
