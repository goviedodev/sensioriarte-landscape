import { CUALIDADES } from "~/data/contenido";
import { enlaceWhatsApp } from "~/lib/whatsapp";
import { ProductoDestacado } from "./ProductoDestacado";

export function Catalogo() {
	return (
		<section id="catalogo" className="seccion catalogo" aria-labelledby="titulo-catalogo">
			<div className="contenedor">
				<div className="catalogo__cabeza">
					<h2 id="titulo-catalogo">Elige por lo que tu hijo necesita sentir</h2>
					<p>
						Organizamos el material por la sensación que entrega, no por el tipo de juguete.
						Así es más fácil seguir una recomendación de terapia. Toca una categoría y te
						enviamos lo disponible por WhatsApp.
					</p>
				</div>

				<ul className="cualidades">
					{CUALIDADES.map((c) => (
						<li key={c.clave}>
							<a
								className="cualidad"
								href={enlaceWhatsApp(c.mensaje)}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div
									className={`cualidad__textura cualidad__textura--${c.clave}`}
									aria-hidden="true"
								/>
								<div className="cualidad__cuerpo">
									<h3>{c.titulo}</h3>
									<p>{c.texto}</p>
								</div>
							</a>
						</li>
					))}
				</ul>

				<ProductoDestacado />
			</div>
		</section>
	);
}
