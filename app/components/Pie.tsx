import { INSTAGRAM } from "~/data/contenido";

export function Pie() {
	return (
		<footer className="pie">
			<div className="contenedor pie__fila">
				<p>© {new Date().getFullYear()} Sensoriarte. Limache, Región de Valparaíso.</p>
				<p>
					<a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">
						Instagram
					</a>
				</p>
			</div>
		</footer>
	);
}
