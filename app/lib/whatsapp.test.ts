import { describe, expect, it } from "vitest";
import { enlaceWhatsApp, mensajeProfesional, NUMERO_WHATSAPP } from "./whatsapp";

describe("enlaceWhatsApp", () => {
	it("usa el número de la tienda y codifica el mensaje", () => {
		const url = enlaceWhatsApp("Hola, busco material con peso");
		expect(url).toBe(
			`https://wa.me/${NUMERO_WHATSAPP}?text=Hola%2C%20busco%20material%20con%20peso`,
		);
	});

	it("acepta otro número", () => {
		expect(enlaceWhatsApp("hola", "56911111111")).toContain("wa.me/56911111111?");
	});

	it("codifica saltos de línea y tildes", () => {
		const url = enlaceWhatsApp("línea 1\nlínea 2");
		expect(url).toContain("l%C3%ADnea%201%0Al%C3%ADnea%202");
	});
});

describe("mensajeProfesional", () => {
	it("solo incluye el saludo cuando no hay datos", () => {
		expect(mensajeProfesional({})).toBe("Hola, soy profesional y quiero el catálogo técnico.");
	});

	it("agrega cada campo en su propia línea y recorta espacios", () => {
		const mensaje = mensajeProfesional({
			nombre: "  María José  ",
			organizacion: "Colegio Limache",
			telefono: "+56 9 1234 5678",
		});
		expect(mensaje.split("\n")).toEqual([
			"Hola, soy profesional y quiero el catálogo técnico.",
			"Nombre: María José",
			"Profesión u organización: Colegio Limache",
			"Teléfono: +56 9 1234 5678",
		]);
	});

	it("omite campos vacíos o solo con espacios", () => {
		const mensaje = mensajeProfesional({ nombre: "Ana", organizacion: "   ", telefono: "" });
		expect(mensaje).toBe("Hola, soy profesional y quiero el catálogo técnico.\nNombre: Ana");
	});
});
