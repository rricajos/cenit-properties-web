<script lang="ts">
	/**
	 * Layout de 2 columnas responsive.
	 *
	 * Slots:
	 *  - left  → contenido columna izquierda
	 *  - right → contenido columna derecha
	 *
	 * @prop reverse       Invierte el orden en escritorio.
	 * @prop align         'top' | 'center' | 'bottom'
	 * @prop gap           Separación entre columnas (CSS).
	 * @prop stackAt       Ancho a partir del cual pasa a una columna (ej: '768px').
	 */
	export let reverse = false;
	export let align: 'top' | 'center' | 'bottom' = 'center';
	export let gap = '3rem';
	export let stackAt = '768px';
	export let className = '';
</script>

<div
	class={`c-split ${reverse ? 'c-split--reverse' : ''} c-split--align-${align} ${className}`.trim()}
	style={`--split-gap:${gap}; --split-stack-at:${stackAt};`}
>
	<div class="c-split__col c-split__col--left">
		<slot name="left" />
	</div>
	<div class="c-split__col c-split__col--right">
		<slot name="right" />
	</div>
</div>

<style>
	.c-split {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		column-gap: var(--split-gap);
		row-gap: 2rem;
	}

	.c-split__col {
		min-width: 0;
	}

	.c-split--align-top {
		align-items: flex-start;
	}
	.c-split--align-center {
		align-items: center;
	}
	.c-split--align-bottom {
		align-items: flex-end;
	}

	.c-split--reverse {
		direction: rtl;
	}
	.c-split--reverse > .c-split__col {
		direction: ltr; /* evitar que cambie el texto */
	}

	@media (max-width: 768px) {
		.c-split {
			grid-template-columns: 1fr;
		}
	}
</style>
