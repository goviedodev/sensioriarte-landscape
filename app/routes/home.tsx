import type { Route } from "./+types/home";
import { Beneficios } from "~/components/Beneficios";
import { Cabecera } from "~/components/Cabecera";
import { Catalogo } from "~/components/Catalogo";
import { Hero } from "~/components/Hero";
import { Pie } from "~/components/Pie";
import { Profesionales } from "~/components/Profesionales";
import { Ubicacion } from "~/components/Ubicacion";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "Sensoriarte | Juguetes y material sensorial en Limache, Región de Valparaíso" },
		{
			name: "description",
			content:
				"Juguetes, fidgets y papelería sensorial para niños con TEA, TDAH o necesidades de regulación. Tienda en Limache con despacho a toda la Región de Valparaíso. Convenios para terapeutas y colegios.",
		},
		{ name: "theme-color", content: "#f6f3f9" },
	];
}

export default function Home() {
	return (
		<>
			<Cabecera />
			<main id="inicio">
				<Hero />
				<Beneficios />
				<Catalogo />
				<Profesionales />
				<Ubicacion />
			</main>
			<Pie />
		</>
	);
}
