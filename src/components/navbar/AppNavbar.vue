<template>
    <div id="AppNavbar" class="w-100 h-100 d-flex">
        <AppNavbarLogo />
        <v-spacer></v-spacer>
        <AppNavbarActions />
    </div>
</template>

<script lang="ts" setup>
import AppNavbarActions from './components/AppNavbarActions.vue';
import AppNavbarLogo from './components/AppNavbarLogo.vue';
</script>

<style scoped></style>
