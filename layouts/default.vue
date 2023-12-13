<template>
    <v-app>
        <AppHeader />
        <slot />
        <SpeedInsights />
        <AppFooter />
    </v-app>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>
