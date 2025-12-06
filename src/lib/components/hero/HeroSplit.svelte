<script lang="ts">
  import HeroMedia from './HeroMedia.svelte';
  import HeroContent from './HeroContent.svelte';
  import ImageStrip, { type StripImage } from './ImageStrip.svelte';

  export let title: string;
  export let description: string;
  export let eyebrow: string | null = null;

  export let mainImage: string;
  export let mainImageAlt: string = '';

  export let stripImages: StripImage[] = [];

  // Por si algún día quieres invertir columnas
  export let imageSide: 'left' | 'right' = 'left';
</script>

<section class="hero-split">
  <div class={`hero-split__grid hero-split__grid--${imageSide}`}>
    {#if imageSide === 'left'}
      <HeroMedia src={mainImage} alt={mainImageAlt} />

      <div class="hero-split__right">
        <HeroContent {title} {description} {eyebrow}>
          <!-- Aquí podrías meter botones/enlaces -->
          <slot />
        </HeroContent>

        <ImageStrip {stripImages} />
      </div>
    {:else}
      <div class="hero-split__left">
        <HeroContent {title} {description} {eyebrow}>
          <slot />
        </HeroContent>

        <ImageStrip {stripImages} />
      </div>
