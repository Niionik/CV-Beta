// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    'normalize.css',
    '~/assets/styles/css-variables.scss',
    '~/assets/styles/global.scss',
    '~/assets/styles/typography.scss',
    '~/assets/styles/buttons.scss',
  ],
  // @ts-ignore
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Mulish': [400, 500, 700],
      'Cinzel':[400],
      }
    }],
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@hypernym/nuxt-gsap',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  // gsap: {
  //  ScrollTrigger,
  // }
  image: {
    quality: 90,
    format: ['webp'],
    screens: {
      'xs': 400,
      'sm': 568,
      'md': 768,
      'lg': 992,
      'xl': 1200,
      'xxl': 1400,
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '~/assets/styles/_variables.scss';
            @import '~/assets/styles/_mixins.scss';
          `
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-XXXXXXX',
      },
      
    }
  },
  site: {
    url: 'https://cv.patrycja.wrzalek.dev',
  },
})
