<template>
    <v-app>
        <AppHeader />
        <slot />
        <AppFooter />
    </v-app>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
