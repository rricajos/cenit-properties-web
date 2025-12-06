<script>
  // 'image' | 'text'
  export let type = 'image';

  // Solo para type === 'image'
  export let imageSrc = '';
  export let imageAlt = '';

  // Solo para type === 'text'
  export let title = '';
  export let body = '';

  // 'light' | 'dark' (solo afecta a los bloques de texto)
  export let theme = 'light';

  // Permite añadir clases extra desde fuera
  export let className = '';
</script>

<article
  class={`mosaic-item mosaic-item--${type} mosaic-item--${theme} ${className}`}
>
  {#if type === 'image'}
    <img src={imageSrc} alt={imageAlt} loading="lazy" />
  {:else}
    <div class="mosaic-item__content">
      {#if title}
        <h3>{title}</h3>
      {/if}

      {#if body}
        <p>{body}</p>
      {/if}

      <!-- Slot opcional para contenido extra (botones, links…) -->
      <slot />
    </div>
  {/if}
</article>

<style>
  .mosaic-item {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* IMAGEN */
  .mosaic-item--image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* TEXTO */
  .mosaic-item--text {
    display: flex;
    align-items: center;
    padding: 2.5rem 2rem;
  }

  .mosaic-item__content {
    max-width: 36rem;
  }

  .mosaic-item__content h3 {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .mosaic-item__content p
