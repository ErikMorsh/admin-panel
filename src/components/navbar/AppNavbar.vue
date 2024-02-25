<template>
    <div id="AppNavbar" class="w-100 h-100 d-flex">
        <AppDrawerIcon v-if="mobile"/>
        <AppNavbarLogo />
        <v-spacer></v-spacer>
        <AppNavbarActions />
    </div>
</template>

<script lang="ts" setup>
import AppDrawerIcon from './components/AppNavbarDrawerIcon.vue';
import AppNavbarLogo from './components/AppNavbarLogo.vue';
import AppNavbarActions from './components/AppNavbarActions.vue';

import { computed } from 'vue';
import { useStore } from '@/plugins/vuex';
const store = useStore()

const mobile = computed(() => {
    return store.getters.getScreenSize <= 600 ? true : false
})
</script>

<style scoped></style>
