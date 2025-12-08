<script lang="ts">
	import LayoutShell from '$lib/components/layout/LayoutShell.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import StickyCtaBar from '$lib/components/layout/StickyCtaBar.svelte';
	import '../app.css';
</script>

<LayoutShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<!-- aquí se inyectan las páginas (home, etc.) -->
	<slot />

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</LayoutShell>

<!-- Barra fija global (solo móviles, lógica dentro del propio componente) -->
<StickyCtaBar />
