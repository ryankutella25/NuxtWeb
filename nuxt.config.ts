// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon','@nuxt/ui'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Ryan Kutella\'s Portfolio',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // link:  [{ rel: 'icon', type: 'image/x-icon', href: '/RKLogo.png' }]
    }
  }
})
