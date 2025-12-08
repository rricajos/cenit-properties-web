<script lang="ts">
	import Container from './Container.svelte';

	/**
	 * Sección de página con fondo y padding configurables.
	 *
	 * @prop id           Para anclas del menú (ej: "proyectos").
	 * @prop background   'default' | 'light' | 'dark' | 'accent'
	 * @prop padding      'sm' | 'md' | 'lg'
	 * @prop useContainer Si false, no envuelve en Container.
	 * @prop className    Clases extra.
	 */
	export let id: string | undefined = undefined;
	export let background: 'default' | 'light' | 'dark' | 'accent' = 'default';
	export let padding: 'sm' | 'md' | 'lg' = 'lg';
	export let useContainer = true;
	export let className = '';
</script>

<section
	{id}
	class={`c-section c-section--bg-${background} c-section--pad-${padding} ${className}`.trim()}
>
	{#if useContainer}
		<Container>
			<slot />
		</Container>
	{:else}
		<slot />
	{/if}
</section>

<style>
	.c-section {
		width: 100%;
		scroll-margin-top: calc(var(--header-offset) + 8px);
	}

	/* Espaciados verticales */
	.c-section--pad-sm {
		padding-block: 2rem;
	}
	.c-section--pad-md {
		padding-block: 3.5rem;
	}
	.c-section--pad-lg {
		padding-block: 5rem;
	}

	/* Fondos base: ajusta los colores a tu sistema */
	.c-section--bg-default {
		background: var(--color-bg);
	}

	.c-section--bg-light {
		background: var(--color-surface-elevated);
	}

	.c-section--bg-dark {
		background: var(--color-bg);
		color: var(--color-text);
	}

	.c-section--bg-accent {
		background: var(--color-accent);
		color: var(--color-primary-contrast);
	}
</style>
