import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	define: {
		"import.meta.vitest": "undefined",
	},
	test: {
		includeSource: ["src/**/*.test.{js,jsx,ts,tsx}", "src/**/*.{js,jsx,ts,tsx}"],
		exclude: ["node_modules", "build", "dist", "public", "src/components/ui"],
		coverage: {
			reporter: ["html", "text"],
			exclude: [
				"node_modules",
				"build",
				"dist",
				"public",
				"src/components/ui",
			],
		},
		globals: true,
		environment: "jsdom",
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		open: true,
		port: 8000,
	},
	build: {
		outDir: "build",
	},
	base: "/",
});
