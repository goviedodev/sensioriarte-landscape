import { BENEFICIOS } from "~/data/contenido";

export function Beneficios() {
	return (
		<section id="beneficios" className="seccion beneficios" aria-labelledby="titulo-beneficios">
			<div className="contenedor beneficios__grid">
				<div className="beneficios__intro">
					<h2 id="titulo-beneficios">Lo que un buen material sensorial hace por un niño</h2>
					<p>
						Muchas familias descubren el mundo sensorial cuando un especialista les da una
						orientación. Los estímulos adecuados ayudan al cerebro infantil a procesar
						emociones, sostener la atención y explorar el entorno con seguridad.
					</p>
				</div>

				<div>
					{BENEFICIOS.map((b) => (
						<article key={b.titulo} className="beneficio">
							<div className={`muestra muestra--${b.muestra}`} aria-hidden="true" />
							<div>
								<h3>{b.titulo}</h3>
								<p>{b.texto}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
