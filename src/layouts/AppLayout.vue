<template>
    <v-layout class="rounded rounded-md">
        <v-system-bar class="pa-0" color="backgroundSecondary" height="70">
            <AppNavbar />
        </v-system-bar>

        <v-navigation-drawer
            color="backgroundSecondary"
            permanent
            width="280"
        >
            <AppSidebar />
        </v-navigation-drawer>

        <v-main
            class="d-flex align-center justify-center"
            style="min-height: 300px"
        >
            <RouterView />
        </v-main>
    </v-layout>
    <Teleport to="body">
        <v-btn @click="toggleTheme" class="theme-toggle" icon variant="tonal">
            <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
    </Teleport>
    
</template>

<script setup lang="ts">
import AppNavbar from '@/components/navbar/AppNavbar.vue';
import AppSidebar from '@/components/sidebar/AppSidebar.vue';

import { useTheme } from 'vuetify';

const theme = useTheme();

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
        ? 'light'
        : 'dark';
}
</script>

<style scoped>
.theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>
