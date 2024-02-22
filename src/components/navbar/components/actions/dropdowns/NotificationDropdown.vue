<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn variant="text" icon color="BandW" v-bind="props">
                <v-badge content="8" color="error">
                    <v-icon size="25">mdi-bell-ring-outline</v-icon>
                </v-badge>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const items = reactive([
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
]);
</script>

<style></style>
