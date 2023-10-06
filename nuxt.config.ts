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
    '@vueuse/motion/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/content',
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

   content: {
    documentDriven: true
  },

})
