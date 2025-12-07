<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export let variant: 'primary' | 'secondary' | 'ghost' | 'link' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let fullWidth = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let className = '';

	// $$restProps es una variable mágica de Svelte, NO se exporta.
	// Solo la tipamos para tener ayuda de TS.
	const restProps = $$restProps as HTMLButtonAttributes;
</script>

<button
	{type}
	{disabled}
	class={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`.trim()}
	{...restProps}
>
	<slot />
</button>

<style>
	.btn {
		font-family: var(--font-sans);
		border-radius: var(--btn-radius);
		border: none;
		cursor: pointer;
		padding: var(--btn-padding-y) var(--btn-padding-x);
		font-size: var(--btn-font-size);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		transition:
			transform 0.1s ease,
			box-shadow 0.1s ease,
			background 0.15s ease;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.btn--full {
		width: 100%;
	}

	/* VARIANTES */
	.btn--primary {
		background: var(--color-primary);
		color: var(--color-primary-contrast);
		box-shadow: var(--shadow-soft);
	}

	.btn--primary:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
	}

	.btn--secondary {
		background: transparent;
		border: 1px solid var(--color-text);
		color: var(--color-text);
	}

	.btn--ghost {
		background: transparent;
		color: var(--color-text);
	}

	.btn--link {
		background: none;
		border: none;
		padding: 0;
		text-transform: none;
		letter-spacing: normal;
		color: var(--color-primary);
		box-shadow: none;
	}

	/* SIZES */
	.btn--sm {
		padding: 0.4rem 0.9rem;
		font-size: 0.8rem;
	}

	.btn--md {
		/* usa los tokens por defecto */
	}

	.btn--lg {
		padding: 0.8rem 1.9rem;
		font-size: 1.05rem;
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		box-shadow: none;
		transform: none;
	}
</style>
