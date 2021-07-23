export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Growtopian - Discord Bot',
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { name: 'theme-color', content: '#77a9ed' },
      { property: 'og:title', content: 'Growtopian - Discord Bot' },
      { property: 'og:description', content: 'Growtopian is a Growtopia game themed feature-rich Discord bot.' },
      { property: 'og:url', content: 'https://growtopian.xyz' },
      { property: 'og:image', content: '/icon.png' },
      { property: 'og:image:width', content: '64' },
      { property: 'og:image:height', content: '64' },
      { hid: 'description', name: 'description', content: 'Growtopian is a Growtopia game themed feature-rich Discord bot.' },
      { hid: 'keywords', name: 'keywords', content: 'Growtopian, Discord, Discord Bot, Growtopia, World Lock, Fun, Growtopian Bot' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preload", as: "style", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap", onload: "this.onload=null;this.rel='stylesheet'" },
      { rel: "preload", as: "style", href: "https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap", onload: "this.onload=null;this.rel='stylesheet'" }
    ],
    script: []
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/pwa'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['@nuxtjs/sitemap', {
      hostname: 'https://growtopian.xyz',
      path: '/sitemap.xml',
      routes: [
        '/',
        '/rules',
        '/commands',
        '/premium'
      ]
    }],
    ['nuxt-lazy-load', {
      directiveOnly: true
    }],
  ],

  pwa: {
    manifest: {
      name: 'Growtopian',
      short_name: 'Growtopian',
      theme_color: '#77a9ed',
      background_color: '#f2f2f2',
      lang: 'en',
      description: 'Growtopian Bot\'s app to access its website in one click!',
      start_url: '/commands'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
