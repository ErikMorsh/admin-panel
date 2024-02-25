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
            :width="screenMode === 'mobile' ? pageSize : 280"
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
import AppNavbar from '@/components/navbar/AppNavbar.vue';
import AppSidebar from '@/components/sidebar/AppSidebar.vue';
import AppLayoutNavigation from '@/components/app-layout-navigation/AppLayoutNavigation.vue';

//  Temprery Button for change theme
import { useTheme } from 'vuetify';
const theme = useTheme();
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
        ? 'light'
        : 'dark';
}


// Use props for sidebar drawer
import { ref, computed } from 'vue'

const drawerModeBasedOnScreen = computed(() => {
    // add full desktop mode = false or medium size for fainted background = true
    if (screenMode.value === 'lg')
    return false
else if (screenMode.value === 'md' || screenMode.value === 'mobile')
return true
})

const drawerState = ref(true)
function toggleSidebar() {
    console.log('emited')
    drawerState.value = !drawerState.value
}  
 
 
//  Set page size 
const pageSize = ref(0)
// now we can get breakpoints
const screenMode = computed(() => {
    if (pageSize.value > 1000)
        return 'lg'
    else if (pageSize.value > 600)
        return 'md'
    else
        return 'mobile'
})
function onResize() {
    pageSize.value = window.innerWidth
}
onResize() // this code will run on onCreate lifecycle
</script>

<style scoped>
.theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>
