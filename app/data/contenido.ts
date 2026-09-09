/** Contenido editable de la landing. Cambiar textos aquí, no en los componentes. */

export interface Beneficio {
	muestra: "peso" | "click" | "textura";
	titulo: string;
	texto: string;
}

export const BENEFICIOS: readonly Beneficio[] = [
	{
		muestra: "peso",
		titulo: "Regular las emociones",
		texto:
			"Elementos con peso, texturas específicas y movimientos repetitivos que ayudan a bajar la frustración, la ansiedad y la sobreestimulación.",
	},
	{
		muestra: "click",
		titulo: "Fortalecer motricidad fina y atención",
		texto:
			"Juegos diseñados para mejorar el agarre, la coordinación mano-ojo y mantener la atención durante tareas escolares o de estudio.",
	},
	{
		muestra: "textura",
		titulo: "Incluir a cada niño en su propio ritmo",
		texto:
			"Herramientas pensadas para niños dentro del espectro autista, con TDAH o con diferencias de procesamiento sensorial, y también para la etapa preescolar.",
	},
];

export interface Cualidad {
	clave: "silencio" | "click" | "textura" | "peso";
	titulo: string;
	texto: string;
	mensaje: string;
}

export const CUALIDADES: readonly Cualidad[] = [
	{
		clave: "silencio",
		titulo: "Silencioso",
		texto: "Para la sala de clases o la consulta. Se aprietan, estiran o giran sin hacer ruido.",
		mensaje: "Hola, busco material sensorial silencioso",
	},
	{
		clave: "click",
		titulo: "Con click",
		texto: "Interruptores, botones y pop-its. El sonido rítmico ayuda a descargar tensión.",
		mensaje: "Hola, busco material sensorial con click",
	},
	{
		clave: "textura",
		titulo: "Con textura",
		texto: "Superficies rugosas, suaves o con relieve para explorar con las manos.",
		mensaje: "Hola, busco material sensorial con textura",
	},
	{
		clave: "peso",
		titulo: "Con peso",
		texto: "Peluches, mantas y cojines con peso que dan calma y sensación de contención.",
		mensaje: "Hola, busco material sensorial con peso",
	},
];

export const VENTAJAS_PROFESIONALES: readonly string[] = [
	"Cotizaciones formales y factura para colegios, jardines y clínicas.",
	"Catálogo técnico ordenado por área de desarrollo sensorial.",
	"Descuentos por volumen y atención preferente para profesionales de la región.",
];

export const COMUNAS: readonly string[] = [
	"Limache",
	"Olmué",
	"Villa Alemana",
	"Quilpué",
	"Viña del Mar",
	"Valparaíso",
	"Quillota",
	"La Calera",
];

export const INSTAGRAM = {
	usuario: "@papeleria_sensoriarte",
	url: "https://www.instagram.com/papeleria_sensoriarte/",
} as const;

export const PRODUCTO_DESTACADO = {
	titulo: "Llaveros Clicker Sensoriales",
	imagen: "/img/llavero-clicker.jpg",
	alt: "Llaveros de interruptor mecánico en colores pasteles",
	intro:
		"Llaveros de interruptor mecánico en hermosos colores pasteles con un casi adictivo sonido! Estos llaveros clicker son el accesorio perfecto para quienes buscan liberar tensión o simplemente aman la sensación táctil de un teclado mecánico.",
	destacado: "¿Necesitas un momento de calma en tu día? 🧘‍♂️✨",
	beneficios: [
		"Nuestros nuevos Clickers Sensoriales son el aliado perfecto para esos momentos de estrés o cuando necesitas un extra de concentración.",
		'Su sonido rítmico y su textura suave ayudan a canalizar la ansiedad de forma discreta y divertida. ¡Llévalos en tus llaves o mochila y dale "click" al bienestar!',
	],
	mensaje: "Hola, quiero un llavero clicker sensorial",
	publicacion: "https://www.instagram.com/p/DYsErz3IDTb/",
} as const;
