<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { Rocket, Award, Users } from 'lucide-svelte';

	export let title: string;
	export let text: string;
	export let icon: string | undefined = undefined;
	export let href: string | null = null;
</script>

<article class="feature-card" class:feature-card--is-link={href}>
	{#if href}
		<a class="feature-card__body" {href}>
			{#if icon === 'rocket'}
				<div class="feature-card__icon-col">
					<Icon w={'auto'} h={'50%'} className="feature-card__icon">
						<Rocket />
					</Icon>
				</div>
			{:else if icon === 'medal'}
				<div class="feature-card__icon-col">
					<Icon w={'auto'} h={'50%'} className="feature-card__icon">
						<Award />
					</Icon>
				</div>
			{:else if icon === 'team'}
				<div class="feature-card__icon-col">
					<Icon w={'auto'} h={'50%'} className="feature-card__icon">
						<Users />
					</Icon>
				</div>
			{/if}

			<div class="feature-card__content">
				<h3 class="feature-card__title">{title}</h3>
				<p class="feature-card__text">{text}</p>
			</div>
		</a>
	{:else}
		<div class="feature-card__body">
			{#if icon === 'rocket'}
				<div class="feature-card__icon-col">
					<Icon size={32} className="feature-card__icon">
						<Rocket />
					</Icon>
				</div>
			{:else if icon === 'medal'}
				<div class="feature-card__icon-col">
					<Icon size={32} className="feature-card__icon">
						<Award />
					</Icon>
				</div>
			{:else if icon === 'team'}
				<div class="feature-card__icon-col">
					<Icon size={32} className="feature-card__icon">
						<Users />
					</Icon>
				</div>
			{/if}

			<div class="feature-card__content">
				<h3 class="feature-card__title">{title}</h3>
				<p class="feature-card__text">{text}</p>
			</div>
		</div>
	{/if}
</article>

<style>
	/* Antes el padding estaba aquí */
	.feature-card {
		background: var(--color-card, var(--color-surface, #ffffff));
		border-radius: var(--radius-lg, 0.9rem);
		border: 1px solid var(--border-subtle, rgba(15, 23, 42, 0.06));
		box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
		/* 👇 quitamos el padding del contenedor externo */
		padding: 0;

		transition:
			transform 160ms ease,
			box-shadow 160ms ease,
			border-color 160ms ease,
			background-color 160ms ease;
	}

	/* La grid ahora ocupa toda la altura de la tarjeta
	   y aquí metemos el padding interno */
	.feature-card__body {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 0.8rem;
		row-gap: 0.25rem;
		align-items: stretch; /* hace que las columnas se estiren a la misma altura */

		padding: 0.9rem 0.85rem; /* 👈 movido aquí */
		text-decoration: none;
		color: inherit;
	}

	.feature-card--is-link .feature-card__body {
		cursor: pointer;
	}

	/* Columna del icono: ahora sí, toda la altura interior */
	.feature-card__icon-col {
		display: flex;
		align-items: center;
	}

	.feature-card__icon {
		border-radius: 999px;
		background: var(--accent-soft, rgba(79, 70, 229, 0.08));
		color: var(--accent-strong, #4f46e5);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.45rem;
	}

	.feature-card__content {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		max-width: 32rem;
	}

	.feature-card__title {
		font-family: var(--font-heading, inherit);
		font-weight: 700;
		letter-spacing: -0.01em;
		font-size: clamp(1.15rem, 1.6vw, 1.5rem);
		line-height: 1.2;
		margin: 0;
	}

	.feature-card__text {
		font-size: 0.82rem;
		line-height: 1.4;
		color: var(--color-text-muted, var(--color-text));
		opacity: 0.9;
	}

	.feature-card:hover,
	.feature-card:focus-within {
		transform: translateY(-2px);
		box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
		border-color: rgba(79, 70, 229, 0.15);
	}

	.feature-card--is-link:focus-within {
		outline: 2px solid var(--accent-strong, #4f46e5);
		outline-offset: 2px;
	}

	@media (min-width: 768px) {
		/* en desktop mantenemos la misma idea,
		   solo cambiamos layout/espaciados */
		.feature-card__body {
			grid-template-columns: 1fr;
			row-gap: 0.75rem;
			align-items: flex-start;
			padding: 1.4rem 1.3rem;
		}

		.feature-card__icon-col {
			align-items: flex-start;
		}

		.feature-card__icon {
			width: 2.75rem;
			height: 2.75rem;
		}

		.feature-card__content {
			gap: 0.35rem;
		}

		.feature-card__text {
			font-size: 0.9rem;
			line-height: 1.5;
		}
	}
</style>
