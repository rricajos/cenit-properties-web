<script lang="ts">
	/**
	 * Contenedor centrado con ancho máximo.
	 *
	 * @prop tag        Etiqueta HTML (div, section, main...)
	 * @prop fullWidth  Si true, elimina el max-width (ocupa todo el ancho).
	 * @prop className  Clases extra.
	 */
	export let tag: keyof HTMLElementTagNameMap = 'div';
	export let fullWidth = false;
	export let className = '';
</script>

<svelte:element
	this={tag}
	class={`c-container ${fullWidth ? 'c-container--full' : ''} ${className}`.trim()}
>
	<slot />
</svelte:element>

<style>
	.c-container {
		margin-inline: auto;
		max-width: 1120px; /* ajusta según diseño */
		padding-inline: 1.5rem;
	}

	.c-container--full {
		max-width: none;
	}
</style>
