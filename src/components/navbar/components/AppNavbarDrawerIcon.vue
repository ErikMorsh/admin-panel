<template>
    <div class="ml-2 d-flex align-center">
        <v-btn @click="handleDrawerClick" icon variant="text" :color="drawerState ? 'primary' : ''">
            <transition name="d" mode="out-in">
                <v-icon v-if="drawerState">
            mdi-close
            </v-icon>
            <v-icon v-else>
                mdi-menu
            </v-icon>
            </transition>
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { MutationTypes } from '@/vuex/mutation-type';
import { useStore } from '@/plugins/vuex';
const store = useStore()

const drawerState = computed(() => {
    return store.getters.getDrawerState
})

function handleDrawerClick() {
    store.commit(MutationTypes.SET_DRAWER_STATE, !store.getters.getDrawerState)
}
</script>

<style scoped>
.d-enter-from,
.d-leave-to {
    opacity: 0;
}

.d-enter-active,
.d-leave-active {
    transition: opacity 0.2s ease;
}

.d-enter-to,
.d-leave-from {
    opacity: 1;
}
</style>