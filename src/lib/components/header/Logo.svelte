<script lang="ts">
	export let text = 'CENIT PROPERTIES';
	export let href = '/';
</script>

<a class="logo" {href} aria-label="Ir a la página de inicio">
	<span class="logo__text">{text}</span>
</a>

<style>
	.logo {
		text-decoration: none;
		display: inline-flex;
		align-items: center;
	}

	.logo__text {
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 1.05rem;
	}

	@media (max-width: 767px) {
		.logo__text {
			font-size: 0.95rem; /* más contenido en mobile */
			letter-spacing: 0.07em; /* un poco menos de tracking */
		}
	}
</style>
