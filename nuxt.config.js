export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Google Analytics
  googleAnalytics: {
    id: "{G-L57NDQ75W5}",
    dev: false
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Growtopian - Discord Bot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { name: 'theme-color', content: '#77a9ed'},
      { property: 'og:title', content: 'Growtopian - Discord Bot'},
      { property: 'og:description', content: 'Growtopian is a Growtopia game themed feature-rich Discord bot.' },
      { property: 'og:url', content: 'https://growtopian.xyz'},
      { property: 'og:image', content: '/growtopian.png'},
      { property: 'og:image:width', content: '64'},
      { property: 'og:image:height', content: '64'},
      { hid: 'description', name: 'description', content: 'Growtopian is a Growtopia game themed feature-rich Discord bot.' },
      { hid: 'keywords', name: 'keywords', content: 'Growtopian, Discord, Discord Bot, Growtopia, World Lock, Fun, Growtopian Bot' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/google-analytics'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
