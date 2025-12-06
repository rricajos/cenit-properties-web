<script lang="ts">
  import FooterColumn from './FooterColumn.svelte';

  export type FooterColumnData = {
    id?: string;
    title: string;
    body?: string;
  };

  export let columns: FooterColumnData[] = [];
</script>

<section class="footer-columns">
  {#if columns.length}
    {#each columns as column (column.id ?? column.title)}
      <FooterColumn {column.title} {column.body} />
    {/each}
  {:else}
    <!--
      Si no pasas columns, puedes construir las columnas a mano
      usando el slot:
      <FooterColumns>
        <FooterColumn ... />
        <FooterColumn ... />
      </FooterColumns>
    -->
    <slot />
  {/if}
</section>

<style>
  .footer-columns {
    display: grid;
    gap: 2rem;
  }

  /* 3 columnas en desktop, 1–2 en móvil/tablet */
  @media (min-width: 768px) {
    .footer-columns {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .footer-columns {
      gap: 3rem;
    }
  }
</style>
