<template>
    <div class="about">
        <v-card>
            <h1>This is an about page</h1>
        </v-card>
        <v-text-field v-model="inputMessage"></v-text-field>
        <v-card>
            <p class="bg-teal-accent-2">{{ inputMessage }}</p>
        </v-card>
        <v-btn @click="handleClick">Set message to store</v-btn>
        <v-card>
            <v-card-subtitle>Message from store</v-card-subtitle>
            <p class="bg-indigo-accent-4">{{ store.getters.getMessage }}</p>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { ActionTypes } from '@/vuex/action-type';
import { useStore } from '@/plugins/vuex';
const store = useStore();

const inputMessage = ref<string>('');
watch(inputMessage, (newVal, oldVal) => {
    store.dispatch(ActionTypes.SET_MESSAGE, newVal);
});

function handleClick(): void {
    store.dispatch(ActionTypes.SET_MESSAGE, inputMessage.value);
}
</script>

<style>
@media (min-width: 1024px) {
    .about {
        display: flex;
        flex-direction: column;
    }
}
</style>
