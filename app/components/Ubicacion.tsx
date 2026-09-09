import { COMUNAS, INSTAGRAM } from "~/data/contenido";
import { enlaceWhatsApp } from "~/lib/whatsapp";

export function Ubicacion() {
	return (
		<section id="contacto" className="seccion ubicacion" aria-labelledby="titulo-ubicacion">
			<div className="contenedor ubicacion__grid">
				<div>
					<h2 id="titulo-ubicacion">Estamos en Limache y despachamos a la región</h2>
					<p className="ubicacion__texto">
						Puedes retirar en la tienda o pedir despacho. Coordinamos entregas continuas a
						estas comunas y alrededores:
					</p>
					<ul className="comunas" aria-label="Comunas con despacho">
						{COMUNAS.map((c) => (
							<li key={c}>{c}</li>
						))}
					</ul>
					<dl className="datos">
						<div>
							<dt>Dirección</dt>
							<dd>Limache, Región de Valparaíso, Chile</dd>
						</div>
						<div>
							<dt>Instagram</dt>
							<dd>
								<a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">
									{INSTAGRAM.usuario}
								</a>
							</dd>
						</div>
					</dl>
				</div>

				<div className="asesoria">
					<h3>Te ayudamos a elegir</h3>
					<p>
						Cuéntanos la edad de tu hijo o hija y qué quieres trabajar, y te recomendamos el
						material adecuado.
					</p>
					<a
						href={enlaceWhatsApp("Hola! Busco asesoría para comprar material sensorial")}
						target="_blank"
						rel="noopener noreferrer"
						className="boton boton--whatsapp boton--bloque"
					>
						Escribir por WhatsApp
					</a>
				</div>
			</div>
		</section>
	);
}
