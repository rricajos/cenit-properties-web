<script lang="ts">
	export let size = 40; // px
	export let className = '';
</script>

<span class={`icon ${className}`.trim()} style={`width:${size}px; height:${size}px;`}>
	<slot />
</span>

<style>
	.icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 1.3rem;
		line-height: 1;
	}

	.icon :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
