<script lang="ts">
	export let as: keyof HTMLElementTagNameMap = 'article';
	export let variant: 'flat' | 'elevated' | 'outline' = 'flat';
	export let clickable = false;
	export let className = '';
</script>

<svelte:element
	this={as}
	class={`card card--${variant} ${clickable ? 'card--clickable' : ''} ${className}`.trim()}
>
	<slot />
</svelte:element>

<style>
	.card {
		background: var(--color-card);
		border-radius: var(--radius-md);
		padding: var(--space-md);
	}

	.card--flat {
		box-shadow: none;
	}

	.card--elevated {
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
	}

	.card--outline {
		border: 1px solid rgba(0, 0, 0, 0.07);
	}

	.card--clickable {
		cursor: pointer;
		transition:
			transform 0.12s ease,
			box-shadow 0.12s ease;
	}

	.card--clickable:hover {
		transform: translateY(-2px);
		box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
	}
</style>
