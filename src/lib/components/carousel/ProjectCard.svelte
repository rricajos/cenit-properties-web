<script lang="ts">
	export interface Project {
		id: number;
		title: string;
		subtitle: string;
		meta: string;
		description: string;
		imageUrl: string;
	}

	export let project: Project;
	export let isActive: boolean = false;
</script>

<article class="project-card" class:active={isActive}>
	<div class="image-wrapper">
		<img
			src={project.imageUrl}
			alt={project.title}
			loading="lazy"
			sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
		/>
	</div>

	<div class="card-content">
		<h3 class="project-title">{project.title}</h3>
		<p class="project-subtitle">{project.subtitle}</p>
		<p class="project-meta">{project.meta}</p>
	</div>
</article>

<style>
	.project-card {
		background-color: var(--color-card);
		border-radius: var(--radius-md);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		border: 1px solid transparent;
		transition:
			transform 0.25s ease,
			border-color 0.25s ease;
	}

	.project-card:hover {
		transform: translateY(-2px);
	}

	.project-card.active {
		border-color: var(--accent-strong);
		transform: translateY(-3px);
	}

	.image-wrapper {
		position: relative;
		width: 100%;
		padding-top: 56.25%; /* 16:9 */
		overflow: hidden;
	}

	.image-wrapper img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transform: scale(1.02);
		transition: transform 0.35s ease;
	}

	.project-card:hover .image-wrapper img,
	.project-card.active .image-wrapper img {
		transform: scale(1.05);
	}

	.card-content {
		padding: 1.25rem 1.25rem 1.4rem;
	}

	@media (min-width: 768px) {
		.card-content {
			padding: 1.5rem 1.5rem 1.6rem;
		}
	}

	.project-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--color-text);
		margin: 0 0 0.45rem;
	}

	@media (min-width: 768px) {
		.project-title {
			font-size: 1.25rem;
		}
	}

	.project-subtitle {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		margin: 0 0 0.4rem;
	}

	.project-meta {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		margin: 0;
	}
</style>
