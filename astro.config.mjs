import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import alpinejs from '@astrojs/alpinejs';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [db(), alpinejs()]
});