import { useCallback, useEffect, useState } from "react";

export const CLAVE_CALMO = "sensoriarte:calmo";

function leerCalmo(): boolean {
	try {
		return window.localStorage.getItem(CLAVE_CALMO) === "1";
	} catch {
		return false;
	}
}

function guardarCalmo(activo: boolean): void {
	try {
		window.localStorage.setItem(CLAVE_CALMO, activo ? "1" : "0");
	} catch {
		/* almacenamiento no disponible: el modo dura solo esta visita */
	}
}

/**
 * Modo "menos estímulos": quita texturas y movimiento.
 * El script inline de root.tsx aplica la clase antes de hidratar para evitar el parpadeo;
 * este hook sincroniza el estado de React con esa clase y con localStorage.
 */
export function useCalmo(): [boolean, () => void] {
	const [calmo, setCalmo] = useState(false);

	useEffect(() => {
		setCalmo(leerCalmo());
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("calmo", calmo);
	}, [calmo]);

	const alternar = useCallback(() => {
		setCalmo((previo) => {
			const siguiente = !previo;
			guardarCalmo(siguiente);
			return siguiente;
		});
	}, []);

	return [calmo, alternar];
}
