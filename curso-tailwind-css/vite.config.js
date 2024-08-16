import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        componentes: "./componentes.html",
        home: "./home.html",
        loginpage: "./loginpage.html",
      },
    },
  },
});
