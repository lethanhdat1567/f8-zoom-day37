import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
    plugins: [react()],
    base: "/f8-zoom-day37/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/components/GlobalStyles/_variables.scss";`,
            },
        },
    },
});
