// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon','@nuxt/ui'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Ryan Kutella\'s Portfolio',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link:  [
      // { rel: 'icon', type: 'image/x-icon', sizes: "any", href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: 'icon', type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: 'icon', type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: 'manifest', crossorigin: "use-credentials", href: "/site.webmanifest" },
      { rel: 'mask-icon', href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    }
  }
})
