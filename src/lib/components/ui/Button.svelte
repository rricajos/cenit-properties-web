<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'ghost' | 'link' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let fullWidth = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let className = '';

	// $$restProps para pasar on:click, aria-*, etc.
	export let $$restProps;
</script>

<button
	{type}
	{disabled}
	class={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`.trim()}
	{...$$restProps}
>
	<slot />
</button>

<style>
	.btn {
		font-family: var(--font-sans);
		border-radius: var(--radius-sm);
		border: none;
		cursor: pointer;
		padding: 0.6rem 1.4rem;
		font-size: 0.95rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		transition:
			transform 0.1s ease,
			box-shadow 0.1s ease,
			background 0.15s;
	}

	.btn--full {
		width: 100%;
	}

	.btn--primary {
		background: var(--color-primary);
		color: var(--color-text);
	}

	.btn--primary:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
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
	}

	.btn--sm {
		padding: 0.4rem 0.8rem;
		font-size: 0.8rem;
	}

	.btn--lg {
		padding: 0.8rem 1.8rem;
		font-size: 1.05rem;
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		box-shadow: none;
		transform: none;
	}
</style>
