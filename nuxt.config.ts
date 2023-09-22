// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,
  
  css: ['@/assets/css/inter.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-schema-org',
    'nuxt-simple-sitemap',
    'nuxt-gtag',
    '@vueuse/motion/nuxt',
    '@formkit/auto-animate/nuxt'
  ],

   headlessui: {
        prefix: 'Headless'
  },
   
  i18n: {
    locales: ['en', 'kk'],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },

  gtag: {
    // use actual ID here
    id: 'G-XXXXXXXXXX' 
  }

})
