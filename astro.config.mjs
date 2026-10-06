import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Enable SCSS support
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Enable SCSS @use syntax
          api: 'modern-compiler',
          // Astro 7 / Vite 6 lost `node_modules/...` niet meer op vanaf de projectroot.
          loadPaths: [root],
        }
      }
    }
  },
  
  // Build configuration
  build: {
    assets: 'assets'
  },
  
  // Site configuration
  site: 'https://growthfactory.nl',
  
  // Output configuration
  output: 'static',
  
  // Integrations (add more as needed)
  integrations: [
    // Add integrations here when needed
    // Example: tailwind(), react(), vue(), etc.
  ]
});