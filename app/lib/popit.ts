/** Lógica pura del pop-it del hero. Sin DOM, fácil de probar. */

export const COLUMNAS = 6;
export const TOTAL_BURBUJAS = 36;
export const COLORES = ["salvia", "arcilla", "cielo", "ciruela"] as const;
export type ColorBurbuja = (typeof COLORES)[number];

export type EstadoPopIt = readonly boolean[];

export function estadoInicial(total: number = TOTAL_BURBUJAS): EstadoPopIt {
	return Array.from({ length: total }, () => false);
}

/** Color de la burbuja en la posición dada, en diagonal para que no se repita por fila. */
export function colorDe(indice: number): ColorBurbuja {
	const fila = Math.floor(indice / COLUMNAS);
	const columna = indice % COLUMNAS;
	return COLORES[(fila + columna) % COLORES.length];
}

/** Devuelve un estado nuevo con la burbuja invertida. No modifica el original. */
export function alternar(estado: EstadoPopIt, indice: number): EstadoPopIt {
	if (indice < 0 || indice >= estado.length) return estado;
	return estado.map((presionada, i) => (i === indice ? !presionada : presionada));
}

export function contarPresionadas(estado: EstadoPopIt): number {
	return estado.filter(Boolean).length;
}

export function textoContador(estado: EstadoPopIt): string {
	const presionadas = contarPresionadas(estado);
	return presionadas === 0
		? "Presiona las burbujas"
		: `${presionadas} de ${estado.length} burbujas`;
}
