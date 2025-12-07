<script lang="ts">
	import HeroSplit from '$lib/components/hero/HeroSplit.svelte';
	import FeatureCardGrid from '$lib/components/features/FeatureCardGrid.svelte';
	import MosaicSection from '$lib/components/mosaic/MosaicSection.svelte';
	import CenteredHeadingSection from '$lib/components/sections/CenteredHeadingSection.svelte';
	import GalleryWithTextSection from '$lib/components/mosaic/GalleryWithTextSection.svelte';
	import TwoImageSection from '$lib/components/sections/TwoImageSection.svelte';
	import NumberedFeatureGrid from '$lib/components/features/NumberedFeatureGrid.svelte';
	import ContactSection from '$lib/components/contact/ContactSection.svelte';
	import MosaicItem from '$lib/components/mosaic/MosaicItem.svelte';
	import type { ComponentProps } from 'svelte';

	// Tipo local para los items del mosaico (igual que en MosaicSection)
	type MosaicItemConfig = Omit<ComponentProps<typeof MosaicItem>, 'mobileOrder'> & {
		flipOnMobile?: boolean;
	};

	const serviciosItems: MosaicItemConfig[] = [
		// 1️⃣ Inmobiliaria tradicional (texto, imagen) → NO flip
		{
			variant: 'light',
			title: 'Inmobiliaria tradicional',
			text: `Nuestro core es la compra-venta de inmuebles. Te ayudamos a encontrar la propiedad perfecta o a vender la tuya al mejor precio del mercado. Asesoramiento profesional en cada paso del proceso inmobiliario.

• Valoración profesional de propiedades
• Gestión completa de compra-venta
• Asesoramiento legal y documental`
		},
		{
			variant: 'image',
			src: '/images/sections/servicios/inmobiliaria-tradicional.jpg',
			alt: 'Agente inmobiliario asesorando a una familia en el salón de su casa'
		},

		// 2️⃣ Home Staging (imagen, texto) → flip en móvil
		{
			variant: 'image',
			src: '/images/sections/servicios/home-staging.jpg',
			alt: 'Salón decorado con estilo acogedor preparado para la venta',
			flipOnMobile: true
		},
		{
			variant: 'light',
			title: 'Home Staging profesional',
			text: `Preparamos tu propiedad para que se venda más rápido y al mejor precio. Diseño y decoración estratégica que resalta el potencial de cada espacio sin inversiones excesivas.

• Decoración temporal para venta
• Fotografía profesional incluida
• Optimización de espacios`,
			flipOnMobile: true
		},

		// 3️⃣ Diseño y reforma integral (texto, imagen) → NO flip
		{
			variant: 'light',
			title: 'Diseño y reforma integral',
			text: `Proyectos de interiorismo completos y reformas rentables. Transformamos espacios en hogares funcionales y bonitos, optimizando cada euro invertido para maximizar el valor de tu propiedad.

• Proyectos de diseño personalizados
• Reformas con acabados de calidad
• Gestión completa de obra`
		},
		{
			variant: 'image',
			src: '/images/sections/servicios/diseno-reforma-integral.jpg',
			alt: 'Cocina reformada con muebles de madera y mucha luz natural'
		},

		// 4️⃣ Asesoría fiscal (imagen, texto) → flip en móvil
		{
			variant: 'image',
			src: '/images/sections/servicios/asesoria-fiscal.jpg',
			alt: 'Reunión entre dos profesionales revisando documentación fiscal',
			flipOnMobile: true
		},
		{
			variant: 'light',
			title: 'Asesoría fiscal completa',
			text: `Gestión de todos los trámites fiscales y legales relacionados con tu operación inmobiliaria. Te acompañamos en cada paso para que no tengas que preocuparte de nada.

• Gestión de impuestos inmobiliarios
• Optimización fiscal de la operación
• Tramitación completa de documentos`,
			flipOnMobile: true
		}
	];

	// Tipos de datos para las secciones que reciben arrays
	type FeatureItem = {
		icon?: string;
		title: string;
		text: string;
	};

	type NumberedItem = {
		number: string;
		title: string;
		text: string;
	};

	// Datos del hero principal
	const hero = {
		title: 'Logramos el cénit de los inmuebles en el mercado',
		description:
			'La casa está rodeada por un jardín y hay muchos vecinos diferentes en la zona. La casa promedio está creada para una sola familia.',
		// Rutas de imágenes de ejemplo; pon aquí las de tu carpeta static/
		mainImage: '/images/hero/cenit-hero.jpg'
		// collageImages: [
		// 	'/images/hero/collage-1.jpg',
		// 	'/images/hero/collage-2.jpg',
		// 	'/images/hero/collage-3.jpg'
		// ]
	};

	const stripImages = [
		{ src: '/images/cenit-strip-1.jpg', alt: 'Detalle salón reformado' },
		{ src: '/images/cenit-strip-2.jpg', alt: 'Cocina reformada' },
		{ src: '/images/cenit-strip-3.jpg', alt: 'Dormitorio luminoso' }
	];

	const tags = ['Diseños · Reformas · Asesorías'];

	// Tarjetas PROYECTOS / PREMIOS / NUESTRO EQUIPO
	const featureItems: FeatureItem[] = [
		{
			icon: 'rocket',
			title: 'Proyectos que revalorizan',
			text: 'Seleccionamos, reformamos y preparamos cada inmueble para que destaque en el mercado y aumente su valor real y percibido.',
			href: '#interiores' // o a la sección de proyectos que prefieras
		},
		{
			icon: 'medal',
			title: 'Resultados medibles',
			text: 'Analizamos cada operación: tiempos de venta, incremento de valor tras la reforma y satisfacción de propietarios e inversores.',
			href: '#claim'
		},
		{
			icon: 'team',
			title: 'Nuestro equipo',
			text: 'Arquitectura, interiorismo, reforma y asesoría fiscal en un mismo equipo para que no tengas que coordinar a nadie más.',
			href: '#equipo'
		}
	];

	// Tarjetas numeradas 01 / 02
	const numberedItems: NumberedItem[] = [
		{
			number: '01',
			title: 'Interiores impresionantes',
			text: 'Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.'
		},
		{
			number: '02',
			title: 'Fresco y creativo',
			text: 'Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.'
		}
	];

	// Bloque "Casa y apartamento"
	const casaApartamento = {
		title: 'Casa y apartamento',
		text: 'La casa promedio está creada para una sola familia. Si cree que comprar una casa en Pattaya es quizás más su estilo, hable con nosotros para conocer más sobre cada una de las opciones y formas de propiedad disponibles. El último tipo es el casa balsa construida cerca de la costa o de un río.',
		leftImage: '/images/sections/casa-apartamento-1.jpg',
		rightImage: '/images/sections/casa-apartamento-2.jpg'
	};
</script>

<main>
	<!-- 1. HERO principal: imagen grande + texto + collage de 3 imágenes -->
	<section id="inicio" class="section section--hero">
		<HeroSplit
			eyebrow="CÉNIT · Servicio integral inmobiliario"
			title="La inmobiliaria que lo hace todo"
			description="
      Somos una inmobiliaria diferente. No solo te ayudamos a comprar o vender tu
      propiedad, también nos encargamos del home staging, el diseño interior, las
      reformas necesarias y toda la gestión fiscal. Todo en un solo lugar."
			mainImage={hero.mainImage}
			mainImageAlt="Salón luminoso reformado con estilo cálido"
			{tags}
		>
			<button class="btn btn-primary">Ver servicios</button>
			<button class="btn btn-outline">Contactar</button>
		</HeroSplit>
	</section>

	<!-- 2. PROYECTOS / PREMIOS / NUESTRO EQUIPO -->
	<section id="proyectos" class="section section--features">
		<FeatureCardGrid items={featureItems} />
	</section>

	<!-- 3. Mosaico 2x2: Ideas de diseño / Planes de casa (lo usamos como SERVICIOS) -->
	<section id="servicios" class="section section--mosaic">
		<!-- Dentro de MosaicSection ya maquetas las 4 celdas según la maqueta -->
		<MosaicSection id="mosaic" items={serviciosItems} />
	</section>

	<!-- 4. Título centrado: "Nuevas ideas a la vida" -->
	<section id="claim" class="section section--centered-heading">
		<CenteredHeadingSection
			title="Nuevas ideas a la vida"
			text="Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet."
		/>
	</section>

	<!-- 5. Mosaico grande: "Más de 50 ideas de diseño de interiores" -->
	<section id="interiores" class="section section--gallery">
		<GalleryWithTextSection title="Más de 50 ideas de diseño de interiores" />
	</section>

	<!-- 6. "Casa y apartamento" + 2 imágenes -->
	<section id="tipologias" class="section section--house-apartment">
		<TwoImageSection
			title={casaApartamento.title}
			text={casaApartamento.text}
			leftImage={casaApartamento.leftImage}
			rightImage={casaApartamento.rightImage}
		/>
	</section>

	<!-- 7. Bloque numerado 01 / 02 (lo usamos como EQUIPO en el menú) -->
	<section id="equipo" class="section section--numbered">
		<NumberedFeatureGrid items={numberedItems} />
	</section>

	<!-- 8. Contacto + mapa -->
	<section id="contacto" class="section section--contact">
		<ContactSection />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.section {
		padding-inline: 0.1rem;
		max-width: 1024px;
		margin: 0 auto;
	}

	.section--hero {
	}
</style>
