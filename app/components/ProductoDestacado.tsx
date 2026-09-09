import { useEffect, useRef, useState } from "react";
import { PRODUCTO_DESTACADO } from "~/data/contenido";
import { enlaceWhatsApp } from "~/lib/whatsapp";

/** Tarjeta del producto recién llegado. Si la foto aún no existe, muestra un aviso. */
export function ProductoDestacado() {
	const p = PRODUCTO_DESTACADO;
	const imagenRef = useRef<HTMLImageElement>(null);
	const [sinFoto, setSinFoto] = useState(false);

	useEffect(() => {
		const img = imagenRef.current;
		/* Si el error ocurrió antes de hidratar, onError no se dispara */
		if (img && img.complete && img.naturalWidth === 0) setSinFoto(true);
	}, []);

	return (
		<>
			<p className="destacado__titulo">Recién llegado</p>
			<article className="sensory-product-card">
				<div className="card-image-wrapper">
					<img
						ref={imagenRef}
						src={p.imagen}
						alt={p.alt}
						className="product-img"
						width={900}
						height={900}
						loading="lazy"
						data-fallback={sinFoto ? "" : undefined}
						onError={() => setSinFoto(true)}
					/>
					<p className="card-image-wrapper__aviso" hidden={!sinFoto}>
						Foto del producto en camino. Míralo en Instagram mientras tanto.
					</p>
				</div>

				<div className="card-content">
					<h3 className="product-title">{p.titulo}</h3>
					<p className="product-intro">{p.intro}</p>

					<div className="product-benefits">
						<p className="highlight-text">{p.destacado}</p>
						{p.beneficios.map((texto) => (
							<p key={texto}>{texto}</p>
						))}
					</div>

					<div className="card-actions">
						<a
							href={enlaceWhatsApp(p.mensaje)}
							target="_blank"
							rel="noopener noreferrer"
							className="boton boton--whatsapp"
						>
							Pedir por WhatsApp
						</a>
						<a
							href={p.publicacion}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-instagram"
						>
							Ver publicación original
						</a>
					</div>
				</div>
			</article>
		</>
	);
}
