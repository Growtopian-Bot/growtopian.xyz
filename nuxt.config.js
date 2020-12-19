export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

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
    htmlAttrs: {
      lang: "en"
    },
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
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity:
          "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous",
        defer: true
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        integrity:
          "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
        crossorigin: "anonymous",
        defer: true
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/css/bootstrap.min.css"
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
    '@nuxtjs/google-analytics',
    ['@nuxtjs/sitemap', {
      hostname: 'https://growtopian.xyz',
      path: '/sitemap.xml',
      generate: true,
      routes: [
        '/',
        '/commands',
        '/premium',
        '/continuity-of-service'
      ]
    }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    filenames: {
      img: 'img/[name]-[contenthash:7].[ext]'
    }
  }
}
