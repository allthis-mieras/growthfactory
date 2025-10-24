import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable SCSS support
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Enable SCSS @use syntax
          api: 'modern-compiler'
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