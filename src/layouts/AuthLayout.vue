<template>
  <v-layout class="rounded rounded-md" v-resize="onResize">
    <v-main>
      <div>
        <Login />
      </div>
    </v-main>
  </v-layout>
  <Teleport to="body">
    <v-btn @click="toggleTheme" class="theme-toggler" icon variant="tonal">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </Teleport>
</template>

<script setup lang="ts">
import Login from "../views/auth/Login.vue";

import { MutationTypes } from "@/vuex/mutation-type";
import { useStore } from "@/plugins/vuex";
const store = useStore();

//  Temprery Button for change theme
import { useTheme } from "vuetify";
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
// QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQBBBBBBBBBBBBBBBBBBBBBBB

//  1 Set Screen Size To Store
function onResize() {
  store.commit(MutationTypes.SET_SCREEN_SIZE, window.innerWidth);
}
onResize(); // 1.5 this code will run on onCreate lifecycle
</script>

<style scoped>
.theme-toggler {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
