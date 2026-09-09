#!/usr/bin/env bash
# Levanta Sensoriarte en modo desarrollo (React Router + Vite, con HMR).
#
#   ./run.sh              # http://localhost:5173
#   ./run.sh 3000         # otro puerto
#   PUERTO=3000 ./run.sh  # equivalente
#
set -euo pipefail

cd "$(dirname "$0")"

PUERTO="${1:-${PUERTO:-5173}}"

if ! command -v node >/dev/null 2>&1; then
	echo "Falta Node.js. Instálalo antes de continuar." >&2
	exit 1
fi

# Instala dependencias si faltan o si package.json cambió después del último install.
if [ ! -d node_modules ] || [ package.json -nt node_modules ]; then
	echo "Instalando dependencias..."
	npm install
fi

# Los tipos de las rutas y del Worker se generan a partir de la config; sin ellos
# el editor marca errores falsos en app/routes/+types.
if [ ! -d .react-router/types ]; then
	echo "Generando tipos..."
	npm run typegen
fi

echo "Sensoriarte en http://localhost:${PUERTO}"
echo "Ctrl+C para detener."
exec npm run dev -- --port "$PUERTO"
