<script lang="ts">
	export let w = '40px';
	export let h = '40px';
	export let className = '';
</script>

<span class={`icon ${className}`.trim()} style={`width:${w}; height:${h};`}>
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
