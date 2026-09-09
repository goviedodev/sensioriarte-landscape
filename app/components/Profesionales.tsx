import type { FormEvent } from "react";
import { VENTAJAS_PROFESIONALES } from "~/data/contenido";
import { enlaceWhatsApp, mensajeProfesional } from "~/lib/whatsapp";
import { IconoCheck } from "./Iconos";

function alEnviar(evento: FormEvent<HTMLFormElement>) {
	evento.preventDefault();
	const datos = new FormData(evento.currentTarget);
	const texto = (clave: string) => String(datos.get(clave) ?? "");
	const mensaje = mensajeProfesional({
		nombre: texto("nombre"),
		organizacion: texto("organizacion"),
		telefono: texto("telefono"),
	});
	window.open(enlaceWhatsApp(mensaje), "_blank", "noopener");
}

export function Profesionales() {
	return (
		<section
			id="profesionales"
			className="seccion profesionales"
			aria-labelledby="titulo-profesionales"
		>
			<div className="contenedor profesionales__grid">
				<div>
					<h2 id="titulo-profesionales">Para terapeutas, fonoaudiólogos y equipos PIE</h2>
					<p className="profesionales__texto">
						Queremos ser tu proveedor local en la Región de Valparaíso. Facilitamos el acceso
						a material especializado para tus pacientes, alumnos y salas de estimulación, sin
						esperar despachos desde Santiago.
					</p>
					<ul className="lista-check">
						{VENTAJAS_PROFESIONALES.map((v) => (
							<li key={v}>
								<IconoCheck />
								<span>{v}</span>
							</li>
						))}
					</ul>
					<a
						href={enlaceWhatsApp("Hola, soy profesional y requiero información de convenios")}
						target="_blank"
						rel="noopener noreferrer"
						className="boton boton--whatsapp"
					>
						Pedir convenio o cotización
					</a>
				</div>

				<form className="formulario" onSubmit={alEnviar}>
					<h3>Recibe el catálogo técnico</h3>
					<p className="formulario__nota">
						Al enviar se abre WhatsApp con tus datos ya escritos. Tú decides cuándo mandarlo.
					</p>
					<div className="campo">
						<label htmlFor="nombre">Nombre completo</label>
						<input
							id="nombre"
							name="nombre"
							type="text"
							autoComplete="name"
							placeholder="María José Silva"
							required
						/>
					</div>
					<div className="campo">
						<label htmlFor="organizacion">Profesión u organización</label>
						<input
							id="organizacion"
							name="organizacion"
							type="text"
							autoComplete="organization"
							placeholder="Terapeuta ocupacional, Colegio Limache"
						/>
					</div>
					<div className="campo">
						<label htmlFor="telefono">Teléfono o WhatsApp</label>
						<input
							id="telefono"
							name="telefono"
							type="tel"
							autoComplete="tel"
							placeholder="+56 9 1234 5678"
						/>
					</div>
					<button type="submit" className="boton boton--primario boton--bloque">
						Enviar por WhatsApp
					</button>
				</form>
			</div>
		</section>
	);
}
