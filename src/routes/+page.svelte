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
	import FaqSection from '$lib/components/sections/FaqSection.svelte';

	import type { ComponentProps } from 'svelte';
	import type { FaqItem } from '$lib/components/sections/FaqSection.svelte';

	type Faq = FaqItem;

	const faqs: Faq[] = [
		{
			question: '¿Qué incluye exactamente vuestro servicio integral inmobiliario?',
			answer:
				'Podemos acompañarte desde la valoración inicial del inmueble hasta la reforma, home staging, comercialización, negociación y cierre, incluyendo la parte fiscal y documental.'
		},
		{
			question: '¿Trabajáis solo con viviendas para vender o también para alquilar?',
			answer:
				'Trabajamos tanto con inmuebles en venta como en alquiler. En ambos casos analizamos qué mejoras tienen más impacto en la revalorización y en el tiempo de comercialización.'
		},
		{
			question: '¿Puedo contratar solo la parte de diseño y reforma sin la venta?',
			answer:
				'Sí. Podemos encargarnos únicamente del proyecto de interiorismo y reforma, aunque no gestionemos la venta. Nos adaptamos al punto en el que te encuentres con tu inmueble.'
		},
		{
			question: '¿Cómo es el proceso de inicio si quiero vender mi piso con reforma?',
			answer:
				'Empezamos con una visita y una valoración estimada “tal como está” y “después de la intervención”. A partir de ahí definimos alcance de la reforma, presupuesto y calendario antes de ejecutar.'
		}
	];

	// Tipo local para los items del mosaico (igual que en MosaicSection)
	type MosaicItemConfig = Omit<ComponentProps<typeof MosaicItem>, 'mobileOrder'> & {
		flipOnMobile?: boolean;
	};

	const serviciosItems: MosaicItemConfig[] = [
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

	type FeatureItem = {
		icon?: string;
		title: string;
		text: string;
		href?: string;
	};

	type NumberedItem = {
		number: string;
		title: string;
		text: string;
	};

	type GalleryImage = {
		src: string;
		alt: string;
	};

	const hero = {
		title: 'Logramos el cénit de los inmuebles en el mercado',
		description:
			'La casa está rodeada por un jardín y hay muchos vecinos diferentes en la zona. La casa promedio está creada para una sola familia.',
		mainImage: '/images/hero/cenit-hero.jpg'
	};

	const tags = ['Diseños · Reformas · Asesorías'];

	const featureItems: FeatureItem[] = [
		{
			icon: 'rocket',
			title: 'Proyectos que revalorizan',
			text: 'Seleccionamos, reformamos y preparamos cada inmueble para que destaque en el mercado y aumente su valor real y percibido.',
			href: '#interiores'
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

	const numberedItems: NumberedItem[] = [
		{
			number: '01',
			title: 'Hasta un 15 % más de valor',
			text: 'Reforma y puesta en escena pensadas para subir el precio final, no solo la foto.'
		},
		{
			number: '02',
			title: 'Venta en menos tiempo',
			text: 'Inmueble preparado para reducir días en portal y evitar bajadas de precio.'
		},
		{
			number: '03',
			title: 'Inversión con retorno',
			text: 'Solo proponemos cambios con impacto claro en valor o velocidad de venta.'
		},
		{
			number: '04',
			title: 'Un único interlocutor',
			text: 'Reforma, inmobiliaria y fiscalidad coordinadas en un solo equipo.'
		},
		{
			number: '05',
			title: 'Datos reales de mercado',
			text: 'Valoración basada en comparables actuales, no en precios “emocionales”.'
		},
		{
			number: '06',
			title: 'Riesgo controlado',
			text: 'Presupuesto cerrado y calendario definido antes de empezar la obra.'
		},
		{
			number: '07',
			title: 'Fotografía que vende',
			text: 'Reportaje profesional pensado para destacar en los portales inmobiliarios.'
		},
		{
			number: '08',
			title: 'Trámites sin sorpresas',
			text: 'ITP, plusvalía, IRPF… planificamos la parte fiscal desde el principio.'
		},
		{
			number: '09',
			title: 'Filtramos curiosos',
			text: 'Precalificamos a los interesados para que solo visites con compradores reales.'
		}
	];

	const interiorGalleryText =
		'Te acompañamos desde la idea hasta el último detalle decorativo. Creamos combinaciones de colores, texturas y mobiliario que hacen que cada estancia sea única y preparada para venderse mejor.';

	const interiorGalleryImages: GalleryImage[] = [
		{
			src: '/images/sections/interiores/interior-1.jpg',
			alt: 'Salón luminoso con sofá claro y detalles en madera'
		},
		{
			src: '/images/sections/interiores/interior-2.jpg',
			alt: 'Cocina moderna con isla central y luz natural'
		},
		{
			src: '/images/sections/interiores/interior-3.jpg',
			alt: 'Dormitorio acogedor con textiles cálidos y lámparas de diseño'
		}
	];

	const casaApartamento = {
		title: 'Casa y apartamento',
		text: 'La casa promedio está creada para una sola familia. Si cree que comprar una casa en Pattaya es quizás más su estilo, hable con nosotros para conocer más sobre cada una de las opciones y formas de propiedad disponibles. El último tipo es el casa balsa construida cerca de la costa o de un río.',
		leftImage: '/images/sections/casa-apartamento-1.jpg',
		rightImage: '/images/sections/casa-apartamento-2.jpg'
	};
</script>

<main>
	<!-- 1. HERO principal -->
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
			showCta={false}
		>
			<button class="btn btn-primary">Ver servicios</button>
			<button class="btn btn-outline">Contactar</button>
		</HeroSplit>
	</section>

	<!-- 2. PROYECTOS / PREMIOS / NUESTRO EQUIPO -->
	<section id="proyectos" class="section section--features">
		<FeatureCardGrid items={featureItems} />
	</section>

	<!-- 3. Servicios en mosaico -->
	<section id="servicios" class="section section--mosaic">
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
		<GalleryWithTextSection
			title="Más de 50 ideas de diseño de interiores"
			text={interiorGalleryText}
			images={interiorGalleryImages}
		/>
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

	<!-- 7. Bloque numerado (argumentos racionales) -->
	<section id="equipo" class="section section--numbered">
		<header class="numbered-section__header">
			<p class="numbered-section__eyebrow">Here are the Features</p>
			<h2 class="numbered-section__title">Resultados esperados</h2>
		</header>

		<NumberedFeatureGrid items={numberedItems} />
	</section>

	<!-- 8. Preguntas frecuentes -->
	<section id="faq" class="section section--faq">
		<FaqSection
			title="Preguntas frecuentes"
			intro="Resolvemos algunas de las dudas más habituales sobre cómo trabajamos y cómo podemos ayudarte a revalorizar tu inmueble."
			items={faqs}
		/>
	</section>

	<!-- 9. Contacto + mapa -->
	<ContactSection id="contacto" />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		padding-top: var(--header-offset);
	}

	.section {
		padding-inline: var(--page-padding-x);
		max-width: var(--layout-max-width);
		margin: 0 auto;
	}

	.section--hero {
		position: relative;
		margin-top: 0;
	}

	.section--contact {
		max-width: none;
		padding-inline: 0;
	}

	.numbered-section__header {
		text-align: left;
		margin-bottom: 1.75rem;
	}

	.numbered-section__eyebrow {
		margin: 0 0 0.35rem;
		font-size: 0.78rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--accent-strong, #4b2aad);
		font-weight: 600;
	}

	.numbered-section__title {
		margin: 0;
		font-size: clamp(1.4rem, 2.1vw, 1.8rem);
		line-height: 1.2;
	}

	@media (max-width: 768px) {
		main {
			gap: 8rem;
			padding-bottom: 4.5rem;
		}
	}

	/* 👇 Solo en móvil rompemos el frame para que sea full-width */
	@media (max-width: 767px) {
		.section--hero {
			max-width: none;
			padding-inline: 0;
			width: calc(100% + 0.5rem);
			margin-inline: -0.25rem;
		}
	}
</style>
