<template>
  <div class="py-2 d-flex align-center">
    <v-btn @click="handleDrawerBtn" variant="text">
      <v-icon size="30">
        mdi-{{ !drawerState ? "menu-close" : "menu-open" }}
      </v-icon>
    </v-btn>
    <P> Home / Dashboard</P>
    <!-- TODO: will be dynamic after setting routes -->
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();

// get props
const { drawerState } = defineProps({
  drawerState: Boolean,
});

// use emit to toggle drawer
import { defineEmits } from "vue";
const emits = defineEmits(["toggle-sidebar"]);

function handleDrawerBtn() {
  emits("toggle-sidebar");
}
</script>

<style scoped></style>
