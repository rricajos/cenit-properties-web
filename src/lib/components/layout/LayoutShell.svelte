<script lang="ts">
	/**
	 * Shell global del sitio.
	 *
	 * Slots:
	 *  - header → cabecera (logo, nav…)
	 *  - default → contenido principal de la página
	 *  - footer → pie
	 *
	 * @prop framed Si true, aplica un marco (márgenes) tipo maqueta.
	 */
	export let framed = true;
	export let className = '';
</script>

<div class={`l-shell ${framed ? 'l-shell--framed' : ''} ${className}`.trim()}>
	<header class="l-shell__header">
		<slot name="header" />
	</header>

	<main class="l-shell__main">
		<slot />
	</main>

	<footer class="l-shell__footer">
		<slot name="footer" />
	</footer>
</div>

<style>
	.l-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: var(--color-bg);
		color: var(--color-text);
	}

	.l-shell__main {
		flex: 1 0 auto;
	}
</style>
