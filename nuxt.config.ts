// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@nuxt/fonts'],

  components: [
    { path: '~/components/resume', pathPrefix: false },
    '~/components',
  ],

  css: ['~/assets/css/tokens.css', '~/assets/css/base.css'],

  site: {
    url: 'https://sadeghsou.tech',
    name: 'Mohammad Sadegh Sousahabi',
    description: 'Senior Frontend Engineer with ten years building scalable Vue and Nuxt applications.',
    defaultLocale: 'en',
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },

  sitemap: {
    autoLastmod: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s',
    },
  },
})
