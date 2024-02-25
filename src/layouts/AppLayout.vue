<template>
    <v-layout class="rounded rounded-md" v-resize="onResize">
        <v-system-bar class="pa-0" color="backgroundSecondary" height="70">
            <AppNavbar />
        </v-system-bar>

        <!-- temporary -->
        <v-navigation-drawer
            color="backgroundSecondary"
            v-model="drawerState"
            :temporary="drawerModeBasedOnScreen"
            :width="screenMode === 'mobile' ? store.getters.getScreenSize : 280"
            >
            <AppSidebar/>
        </v-navigation-drawer>

        
        <v-main class="bg-backgroundPrimary">
            <AppLayoutNavigation @toggle-sidebar="toggleSidebar"/>
            <div>
                <RouterView />
            </div>
        </v-main>
    </v-layout>
    <Teleport to="body">
        <v-btn @click="toggleTheme" class="theme-toggle" icon variant="tonal">
            <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
    </Teleport>
    
</template>

<script setup lang="ts">
//  Temprery Button for change theme
import { useTheme } from 'vuetify';
const theme = useTheme();
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
        ? 'light'
        : 'dark';
}
// QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQBBBBBBBBBBBBBBBBBBBBBBB


import AppNavbar from '@/components/navbar/AppNavbar.vue';
import AppSidebar from '@/components/sidebar/AppSidebar.vue';
import AppLayoutNavigation from '@/components/app-layout-navigation/AppLayoutNavigation.vue';

import { ref, computed, watch, onBeforeMount } from 'vue'

import { MutationTypes } from '@/vuex/mutation-type';
import { useStore } from '@/plugins/vuex'
const store = useStore()


// Life Cycles
onBeforeMount(() => {
    // set initial sidebar presence to show in larg screens
    drawerState.value = screenMode.value === 'lg' ? true : false
}) 

// 0 Use props for sidebar drawer
const drawerState = ref(false)
function toggleSidebar() {
    drawerState.value = !drawerState.value
    // commit global drawer state
    store.commit(MutationTypes.SET_DRAWER_STATE, drawerState.value)
}  
// 0 Set drawer state from navbar icon in mobile size
const globalDrawerState = computed(() => {
    return store.getters.getDrawerState
})
watch(globalDrawerState, (newVal) => {
    drawerState.value = newVal
})

//  1 Set Screen Size To Store 
function onResize() {
    store.commit(MutationTypes.SET_SCREEN_SIZE, window.innerWidth);
}
onResize() // 1.5 this code will run on onCreate lifecycle

// 2 now we can get breakpoints
const screenMode = computed(() => {
    const sS = store.getters.getScreenSize
    if (sS > 1000)
        return 'lg'
    else if (sS > 600)
        return 'md'
    else
        return 'mobile'
})
//  3
const drawerModeBasedOnScreen = computed(() => {
    // add full desktop mode = false or medium size for fainted background = true
    if (screenMode.value === 'lg')
        return false
    else if (screenMode.value === 'md' || screenMode.value === 'mobile')
        return true
})
</script>

<style scoped>
.theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>
