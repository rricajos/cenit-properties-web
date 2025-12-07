<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { Rocket, Award, Users } from 'lucide-svelte';

	export let title: string;
	export let text: string;
	export let icon: string | undefined = undefined;
</script>

<article class="feature-card">
	{#if icon === 'rocket'}
		<Icon size={40} className="feature-card__icon">
			<Rocket />
		</Icon>
	{:else if icon === 'medal'}
		<Icon size={40} className="feature-card__icon">
			<Award />
		</Icon>
	{:else if icon === 'team'}
		<Icon size={40} className="feature-card__icon">
			<Users />
		</Icon>
	{/if}

	<h3 class="feature-card__title">{title}</h3>
	<p class="feature-card__text">{text}</p>
</article>

<style>
	.feature-card {
		background: var(--color-card);
		padding: 2rem 1.5rem;
		border-radius: 0.75rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.feature-card__icon {
		border-radius: 999px;
		background: var(--accent-soft);
		color: var(--accent-strong);
	}

	.feature-card__title {
		font-size: 1.05rem;
		font-weight: 600;
	}

	.feature-card__text {
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--color-text);
	}
</style>
