import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		include: ["app/**/*.test.ts"],
		coverage: {
			include: ["app/lib/**/*.ts"],
		},
	},
});
