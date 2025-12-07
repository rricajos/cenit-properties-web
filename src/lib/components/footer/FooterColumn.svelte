<script lang="ts">
	export let title: string;
	export let body: string | undefined = undefined;
</script>

<article class="footer-column">
	{#if title}
		<h3 class="footer-column__title">{title}</h3>
	{/if}

	<div class="footer-column__body">
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
		gap: 0.55rem;
		font-size: 0.9rem;
	}

	.footer-column__title {
		margin: 0;
		font-weight: 600;
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-weight: bold;
	}

	.footer-column__body {
		line-height: 1.7;
		color: #f9f8fe; /* mismo blanco para todo el body del footer */
		opacity: 0.9;
	}
</style>
