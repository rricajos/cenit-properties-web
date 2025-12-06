<script lang="ts">
	export let title: string;
	export let body: string | undefined = undefined;
</script>

<article class="footer-column">
	{#if title}
		<h3 class="footer-column__title">
			{title}
		</h3>
	{/if}

	<div class="footer-column__body">
		<!--
      Si no se pasa body se usa el <slot>, para tener flexibilidad
      (por ejemplo, enlaces, listas, etc.)
    -->
		{#if body}
			<p>{body}</p>
		{:else}
			<slot />
		{/if}
	</div>
</article>

<style>
	.footer-column {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.9rem;
	}

	.footer-column__title {
		font-weight: 600;
	}

	.footer-column__body {
		line-height: 1.5;
		opacity: 0.9;
	}
</style>
