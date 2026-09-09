import foto1 from "~/images/foto1-sensioriarte.jpeg";
import foto2 from "~/images/foto2-sensioriarte.jpeg";
import { PopIt } from "./PopIt";

export function Hero() {
	return (
		<section className="hero" aria-labelledby="titulo-hero">
			<div className="contenedor hero__grid">
				<div>
					<p className="hero__lugar">Tienda en Limache. Despachos a toda la Región de Valparaíso.</p>
					<h1 id="titulo-hero">Material sensorial para calmar, enfocar y jugar.</h1>
					<p className="hero__texto">
						Juguetes, fidgets y papelería seleccionados para niños con TEA, TDAH o necesidades
						de regulación sensorial. Lo que te recomendaron en terapia o en el colegio, cerca
						de casa.
					</p>
					<div className="hero__acciones">
						<a href="#catalogo" className="boton boton--primario">
							Ver catálogo
						</a>
						<a href="#profesionales" className="boton boton--secundario">
							Soy profesional o institución
						</a>
					</div>
					<p className="hero__nota">
						Si buscas algo específico, escríbenos por WhatsApp y te decimos si lo tenemos.
					</p>
				</div>

				<PopIt />

				<div className="fotos">
					<figure className="foto">
						<img
							src={foto1}
							alt="Estante superior de la tienda con juegos de clasificación, arena cinética, bloques de construcción y cajas de piezas para encajar"
							width={1600}
							height={900}
							fetchPriority="high"
						/>
					</figure>
					<figure className="foto">
						<img
							src={foto2}
							alt="Estantes de la tienda con juegos de madera, cajas de formas, ábacos, puzles y artículos de papelería"
							width={1600}
							height={900}
						/>
					</figure>
					<p className="fotos__pie">
						Los estantes de la tienda en Limache. Juegos de madera, encaje de formas, arena
						cinética y papelería, listos para ver y tocar.
					</p>
				</div>
			</div>
		</section>
	);
}
