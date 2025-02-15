import { defineConfig } from "astro/config";
import node from "@astrojs/node"
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [sentry({ debug: true })],
});
