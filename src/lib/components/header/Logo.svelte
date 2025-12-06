<script lang="ts">
	export let text = 'DISEÑO';
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
		font-size: 1.1rem;
	}
</style>
