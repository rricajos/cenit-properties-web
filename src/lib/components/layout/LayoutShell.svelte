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
		background: #d9d9d9; /* gris exterior (margen) */
		color: #222;
	}

	.l-shell--framed {
		padding: 0.25rem;
	}

	.l-shell__header,
	.l-shell__footer,
	.l-shell__main {
		/* el contenido interno usa el "gris claro" de las secciones */
	}

	.l-shell__main {
		/* que el main ocupe el alto restante */
		min-height: calc(100vh - 6rem); /* aprox. header+footer */
	}
</style>
