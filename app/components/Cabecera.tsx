import { useCalmo } from "~/hooks/useCalmo";
import { enlaceWhatsApp } from "~/lib/whatsapp";
import { IconoWhatsApp } from "./Iconos";

const SECCIONES = [
	{ href: "#beneficios", texto: "Por qué funciona" },
	{ href: "#catalogo", texto: "Catálogo" },
	{ href: "#profesionales", texto: "Profesionales y PIE" },
	{ href: "#contacto", texto: "Ubicación y despachos" },
] as const;

export function Cabecera() {
	const [calmo, alternarCalmo] = useCalmo();

	return (
		<header className="cabecera">
			<div className="contenedor cabecera__fila">
				<a href="#inicio" className="marca">
					<span className="marca__sello" aria-hidden="true" />
					<span>
						<span className="marca__nombre">Sensoriarte</span>
						<span className="marca__linea">Material sensorial · Limache</span>
					</span>
				</a>

				<nav className="nav" aria-label="Secciones">
					{SECCIONES.map((s) => (
						<a key={s.href} href={s.href}>
							{s.texto}
						</a>
					))}
				</nav>

				<div className="cabecera__acciones">
					<button
						type="button"
						className="calma"
						aria-pressed={calmo}
						onClick={alternarCalmo}
						title="Quita texturas y movimiento de la página"
					>
						<span className="calma__punto" aria-hidden="true" />
						<span className="calma__texto">Menos estímulos</span>
					</button>
					<a
						href={enlaceWhatsApp("Hola, me gustaría recibir el catálogo de material sensorial")}
						target="_blank"
						rel="noopener noreferrer"
						className="boton boton--whatsapp"
						aria-label="Escribir por WhatsApp"
					>
						<IconoWhatsApp />
						<span>WhatsApp</span>
					</a>
				</div>
			</div>
		</header>
	);
}
