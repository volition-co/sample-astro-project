// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['AGENT_WEB_HOST_PLACEHOLDER'],
  }
});
