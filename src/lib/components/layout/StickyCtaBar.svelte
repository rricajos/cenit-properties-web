<script lang="ts">
	export let primaryLabel = 'Ver servicios';
	export let primaryHref = '#servicios';

	export let secondaryLabel = 'Contactar';
	export let secondaryHref = '#contacto';
</script>

<div class="sticky-cta">
	<a href={primaryHref} class="btn btn-primary sticky-cta__btn">
		{primaryLabel}
	</a>

	<a href={secondaryHref} class="btn btn-outline sticky-cta__btn">
		{secondaryLabel}
	</a>
</div>

<style>
	.sticky-cta {
		position: sticky;
		top: 0; /* el valor real lo controlamos desde +page.svelte */
		z-index: 60;

		display: flex;
		gap: 0.75rem;
		align-items: center;
		justify-content: center;

		padding: 0.55rem 0.8rem;
		border-radius: 999px;

		background: rgba(249, 248, 254, 0.94); /* var(--color-bg) con alpha */
		backdrop-filter: blur(16px);
		box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);

		max-width: 100%; /* que pueda ocupar todo el wrapper */
	}

	.sticky-cta__btn {
		flex: 1;
		text-align: center;
		white-space: nowrap;
	}

	/* Solo móvil: en escritorio desaparece */
	@media (min-width: 768px) {
		.sticky-cta {
			display: none;
		}
	}
</style>
