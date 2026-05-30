import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://chiragkhachane.github.io' : 'https://chintamanihospital.in',
  base: isGitHubPages ? '/chintamanicare' : '/',
  // English at /, Marathi at /mr/, Hindi at /hi/ (Pune is a Marathi-first city,
  // so all three are first-class; the switcher lives in the nav).
  i18n: {
    locales: ['en', 'mr', 'hi'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    icon({ iconDir: 'src/icons' }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', mr: 'mr-IN', hi: 'hi-IN' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
