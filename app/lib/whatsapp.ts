/** Número de WhatsApp de la tienda, sin "+" ni espacios. Reemplazar por el real. */
export const NUMERO_WHATSAPP = "56900000000";

/** Construye un enlace wa.me con el mensaje ya codificado. */
export function enlaceWhatsApp(mensaje: string, numero: string = NUMERO_WHATSAPP): string {
	return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export interface DatosProfesional {
	nombre?: string;
	organizacion?: string;
	telefono?: string;
}

/** Arma el mensaje del formulario de profesionales. Omite campos vacíos. */
export function mensajeProfesional(datos: DatosProfesional): string {
	const limpiar = (v?: string) => (v ?? "").trim();
	const partes = ["Hola, soy profesional y quiero el catálogo técnico."];
	const nombre = limpiar(datos.nombre);
	const organizacion = limpiar(datos.organizacion);
	const telefono = limpiar(datos.telefono);
	if (nombre) partes.push(`Nombre: ${nombre}`);
	if (organizacion) partes.push(`Profesión u organización: ${organizacion}`);
	if (telefono) partes.push(`Teléfono: ${telefono}`);
	return partes.join("\n");
}
