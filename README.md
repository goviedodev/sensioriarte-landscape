# Sensoriarte

Landing de Sensoriarte, tienda de juguetes y material sensorial en Limache, Región de Valparaíso.
Construida con [React Router 7](https://reactrouter.com/) en modo SSR sobre [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Comandos

```bash
npm install        # dependencias
npm run dev        # desarrollo con HMR en http://localhost:5173
npm test           # pruebas unitarias (Vitest)
npm run typecheck  # genera tipos y corre tsc
npm run build      # build de producción en build/
npm run preview    # build + vista previa sobre workerd
npm run deploy     # publica en Cloudflare Workers
```

## Estructura

```
app/
├── routes/home.tsx      # única ruta: arma la página con los componentes
├── components/          # una sección por archivo (Cabecera, Hero, Catálogo, ...)
├── data/contenido.ts    # textos editables: beneficios, categorías, comunas, producto destacado
├── lib/                 # lógica pura con pruebas: enlaces de WhatsApp, estado del pop-it
├── hooks/useCalmo.ts    # modo "menos estímulos" (persistente en localStorage)
├── styles/              # CSS del sistema visual, un archivo por sección
└── images/              # fotos de la tienda (Vite las versiona)
public/img/              # imágenes servidas tal cual, ej. llavero-clicker.jpg
workers/app.ts           # entrada del Worker
```

## Pendientes antes de publicar

- Reemplazar `NUMERO_WHATSAPP` en `app/lib/whatsapp.ts` por el número real.
- Guardar la foto del llavero clicker en `public/img/llavero-clicker.jpg`.
- Completar la dirección de la tienda en `app/components/Ubicacion.tsx`.
