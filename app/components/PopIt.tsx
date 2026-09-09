import { useState } from "react";
import { alternar, colorDe, estadoInicial, textoContador } from "~/lib/popit";

/** El único elemento de la página con licencia para llamar la atención. */
export function PopIt() {
	const [estado, setEstado] = useState(estadoInicial);

	return (
		<div className="popit" aria-label="Pop-it para jugar">
			<div className="popit__grid">
				{estado.map((presionada, i) => (
					<button
						key={i}
						type="button"
						className={`burbuja burbuja--${colorDe(i)}`}
						aria-pressed={presionada}
						aria-label={`Burbuja ${i + 1}`}
						onClick={() => setEstado((previo) => alternar(previo, i))}
					/>
				))}
			</div>
			<div className="popit__pie">
				<span aria-live="polite">{textoContador(estado)}</span>
				<button
					type="button"
					className="popit__reinicio"
					onClick={() => setEstado(estadoInicial())}
				>
					Reiniciar
				</button>
			</div>
		</div>
	);
}
