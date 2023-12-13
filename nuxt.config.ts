import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

export default defineNuxtConfig(
  {
    devtools: { enabled: true },
    css: [
      'vuetify/lib/styles/main.sass'
    ],
    build: {
      transpile: ['vuetify']
    },
    hooks: {
      'vite:extendConfig': config => {
        config.plugins!.push(vuetify())
      }
    },
    vite: {
      ssr: {
        noExternal: ['vuetify']
      },
      define: {
        'process.env.DEBUG': false
      }
    },
    app: {
      // pageTransition:{name:'page',mode:'out-in'}
    }
  }
)

{
  buildModules: [
    '@nuxtjs/vuetify'
  ]
}

