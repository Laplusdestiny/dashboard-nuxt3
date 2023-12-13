import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

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
    }
  }
)

{
  buildModules: [
    '@nuxtjs/vuetify'
  ]
}

