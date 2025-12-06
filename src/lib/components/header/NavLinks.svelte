<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export type NavLink = {
		href: string;
		label: string;
	};

	export let links: NavLink[] = [];

	// horizontal (desktop) o vertical (menú móvil)
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';

	const dispatch = createEventDispatcher<{ linkClick: NavLink }>();

	function handleClick(link: NavLink) {
		dispatch('linkClick', link);
	}
</script>

<ul class="nav-links nav-links--{orientation}">
	{#each links as link}
		<li class="nav-links__item">
			<a class="nav-links__link" href={link.href} on:click={() => handleClick(link)}>
				{link.label}
			</a>
		</li>
	{/each}
</ul>

<style>
	.nav-links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 1.75rem;
	}

	.nav-links--vertical {
		flex-direction: column;
		gap: 1rem;
	}

	.nav-links__link {
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
	}

	.nav-links__link:hover,
	.nav-links__link:focus-visible {
		text-decoration: underline;
	}
</style>
