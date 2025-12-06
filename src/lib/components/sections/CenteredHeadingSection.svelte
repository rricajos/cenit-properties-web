<script lang="ts">
	export let id: string | undefined = undefined;
	export let eyebrow: string | undefined = undefined; // opcional (pequeño texto arriba)
	export let title: string;
	export let text: string;
	export let maxWidth: string = '48rem'; // ancho máximo del texto
</script>

<section {id} class="section section--centered-heading">
	<div class="section__inner">
		{#if eyebrow}
			<p class="section__eyebrow">{eyebrow}</p>
		{/if}

		<h2 class="section__title">
			{title}
		</h2>

		<p class="section__text" style={`max-width: ${maxWidth};`}>
			{text}
		</p>

		<!-- Contenido opcional extra (por si el cliente quiere botones, enlaces…) -->
		<slot />
	</div>
</section>

<style>
	.section {
		padding-block: 4rem;
	}

	.section__inner {
		max-width: 72rem;
		margin-inline: auto;
		text-align: center;
		padding-inline: 1.5rem;
	}

	.section__eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-size: 0.75rem;
		margin-bottom: 0.75rem;
	}

	.section__title {
		font-size: clamp(2rem, 3vw, 2.5rem);
		margin-bottom: 1rem;
	}

	.section__text {
		margin-inline: auto;
		line-height: 1.6;
		font-size: 1rem;
	}
</style>
