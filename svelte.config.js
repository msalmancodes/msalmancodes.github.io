import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: { 
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',  // This is crucial!
      precompress: false,
      strict: false
    }),
    paths: {
      base: ''
    }
  }
};

export default config;