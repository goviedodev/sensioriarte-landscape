import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { CLAVE_CALMO } from "./hooks/useCalmo";
import "./app.css";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..700,0..100,0..1&display=swap",
	},
];

/* Aplica el modo "menos estímulos" antes de hidratar, para que no parpadee. */
const scriptCalmo = `try{if(localStorage.getItem(${JSON.stringify(CLAVE_CALMO)})==="1")document.documentElement.classList.add("calmo")}catch(e){}`;

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<script dangerouslySetInnerHTML={{ __html: scriptCalmo }} />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let titulo = "Algo salió mal";
	let detalle = "Ocurrió un error inesperado. Vuelve a intentarlo en un momento.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		titulo = error.status === 404 ? "Página no encontrada" : "Error";
		detalle =
			error.status === 404
				? "La dirección que abriste no existe. Vuelve al inicio para encontrar lo que buscas."
				: error.statusText || detalle;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		detalle = error.message;
		stack = error.stack;
	}

	return (
		<main className="seccion">
			<div className="contenedor">
				<h1>{titulo}</h1>
				<p style={{ marginBlock: "1rem 1.5rem" }}>{detalle}</p>
				<a href="/" className="boton boton--primario">
					Volver al inicio
				</a>
				{stack && (
					<pre style={{ overflowX: "auto", marginTop: "2rem" }}>
						<code>{stack}</code>
					</pre>
				)}
			</div>
		</main>
	);
}
