import { describe, expect, it } from "vitest";
import {
	alternar,
	colorDe,
	COLORES,
	contarPresionadas,
	estadoInicial,
	textoContador,
	TOTAL_BURBUJAS,
} from "./popit";

describe("estadoInicial", () => {
	it("crea 36 burbujas sin presionar", () => {
		const estado = estadoInicial();
		expect(estado).toHaveLength(TOTAL_BURBUJAS);
		expect(estado.every((b) => b === false)).toBe(true);
	});
});

describe("colorDe", () => {
	it("usa solo los colores definidos", () => {
		for (let i = 0; i < TOTAL_BURBUJAS; i += 1) {
			expect(COLORES).toContain(colorDe(i));
		}
	});

	it("no repite color entre vecinas horizontales", () => {
		for (let i = 0; i < TOTAL_BURBUJAS - 1; i += 1) {
			if (i % 6 === 5) continue;
			expect(colorDe(i)).not.toBe(colorDe(i + 1));
		}
	});
});

describe("alternar", () => {
	it("invierte la burbuja indicada sin mutar el original", () => {
		const antes = estadoInicial();
		const despues = alternar(antes, 3);
		expect(despues[3]).toBe(true);
		expect(antes[3]).toBe(false);
		expect(despues).not.toBe(antes);
	});

	it("vuelve a apagar si se presiona dos veces", () => {
		const estado = alternar(alternar(estadoInicial(), 0), 0);
		expect(estado[0]).toBe(false);
	});

	it("ignora índices fuera de rango", () => {
		const estado = estadoInicial();
		expect(alternar(estado, -1)).toBe(estado);
		expect(alternar(estado, 99)).toBe(estado);
	});
});

describe("contador", () => {
	it("cuenta las presionadas", () => {
		const estado = alternar(alternar(estadoInicial(), 1), 5);
		expect(contarPresionadas(estado)).toBe(2);
	});

	it("muestra la instrucción cuando no hay ninguna y el progreso cuando hay", () => {
		expect(textoContador(estadoInicial())).toBe("Presiona las burbujas");
		expect(textoContador(alternar(estadoInicial(), 0))).toBe("1 de 36 burbujas");
	});
});
