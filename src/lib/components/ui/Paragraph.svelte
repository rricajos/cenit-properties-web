<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let muted = false;
	export let align: 'left' | 'center' | 'right' = 'left';
	export let className = '';
</script>

<p
	class={`paragraph paragraph--${size} paragraph--align-${align} ${
		muted ? 'paragraph--muted' : ''
	} ${className}`.trim()}
>
	<slot />
</p>

<style>
	.paragraph {
		font-family: var(--font-sans);
		color: var(--color-text);
		line-height: 1.6;
		margin: 0;
	}

	.paragraph--sm {
		font-size: 0.9rem;
	}
	.paragraph--md {
		font-size: 1rem;
	}
	.paragraph--lg {
		font-size: 1.1rem;
	}

	.paragraph--muted {
		color: var(--color-text-muted);
	}

	.paragraph--align-center {
		text-align: center;
	}
	.paragraph--align-right {
		text-align: right;
	}
</style>
