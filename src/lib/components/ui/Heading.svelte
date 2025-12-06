<script lang="ts">
	export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
	export type HeadingVariant = 'hero' | 'section' | 'card' | 'small';

	export let level: HeadingLevel = 2;
	export let variant: HeadingVariant = 'section';
	export let align: 'left' | 'center' | 'right' = 'left';
	export let className = '';

	const tag = `h${level}` as keyof HTMLElementTagNameMap;
</script>

<svelte:element
	this={tag}
	class={`heading heading--${variant} heading--align-${align} ${className}`.trim()}
>
	<slot />
</svelte:element>

<style>
	.heading {
		font-family: var(--font-sans);
		font-weight: 700;
		color: var(--color-text);
		margin: 0;
	}

	.heading--hero {
		font-size: clamp(2.6rem, 3.2vw, 3.6rem);
		line-height: 1.1;
	}

	.heading--section {
		font-size: clamp(2rem, 2.6vw, 3rem);
		line-height: 1.2;
	}

	.heading--card {
		font-size: 1.4rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.heading--small {
		font-size: 1.2rem;
	}

	.heading--align-left {
		text-align: left;
	}
	.heading--align-center {
		text-align: center;
	}
	.heading--align-right {
		text-align: right;
	}
</style>
