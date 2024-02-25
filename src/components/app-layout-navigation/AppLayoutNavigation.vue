<template>
    <div>
        <v-btn  @click="handleDrawerBtn">
            toggle sidebar
        </v-btn>
    </div>
</template>

<script setup lang="ts">
// import { useStore } from '@/plugins/vuex';
// import { MutationTypes } from '@/vuex/mutation-type' 
// const store = useStore();

// function toggleDrawerState() {
//     store.commit(MutationTypes.SET_SIDEBARSTATE, !store.getters.getSidebarState)
// }


// use emit to toggle drawer
import { defineEmits } from 'vue'
const emits = defineEmits(['toggle-sidebar'])

function handleDrawerBtn() {
    emits('toggle-sidebar')
}
</script>

<style scoped>

</style>