<template>
    <div>
        <div class="w-100" v-for="option in options" :key="option.id">
            <!-- Just For Toggling Children -->
            <div v-if="option.children.length"
                 class="links w-100 px-5 py-3 d-flex text-BandW cursor-pointer"
                 v-ripple
                 @click="toggleLinkChildStatus(option.id)">
                 
                <v-icon class="text-faintedText">mdi-{{ option.icon }}</v-icon>
                <p class="text-capitalize ml-2">Dashboard</p>
                <v-spacer></v-spacer>
                <v-icon>
                    {{ option.childStatus ? 'mdi-chevron-up' : 'mdi-chevron-down'}}
                </v-icon>
            </div>

            <!-- Link Itself -->
            <router-link v-else :to="{ name: 'dashboard'}">
                <div class="links w-100 px-5 py-3 d-flex text-BandW" 
                    v-ripple
                    :class="{
                        'bg-backgroundLinkPrimary': option.selfStatus
                    }">
                    <v-icon class="text-faintedText">mdi-{{ option.icon }}</v-icon>
                    <p class="text-capitalize ml-2" 
                        :class="{
                            'text-primary': option.selfStatus
                            }">Dashboard</p>
                </div>
            </router-link>

            <!-- Children -->
            <div v-if="option.childStatus" 
                    class="w-100"
                    :class="{
                        'bg-backgroundLinkPrimary': option.selfStatus
                    }">
                <router-link :to="{ name: 'dashboard'}">
                    <div class="links w-100 pl-15 py-3 d-flex text-BandW" v-ripple>
                        <p class="text-capitalize ml-2"
                            :class="{
                                'text-primary': option.selfStatus
                            }">Dashboard</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface IChildLink {
    name: string,
    to: string
}

interface IOption {
    id: number,
    name: string,
    to: string,
    icon: string,
    children: IChildLink[],
    childStatus: boolean,
    selfStatus: boolean
}

const options: IOption[] = reactive([
    {
        id: 1,
        name: 'dashboard',
        to: 'dashboard',
        icon: 'monitor-dashboard',
        children: [
           {
                name: 'dash',
                to: 'dash'
            }
        ],
        childStatus: false,
        selfStatus: true
    },
    {
        id: 2,
        name: 'users',
        to: 'users',
        icon: 'account-multiple-outline',
        children: [],
        childStatus: false,
        selfStatus: false
    }
])

function toggleLinkChildStatus(optionId: number): void {
    const option: IOption | undefined = options.find(option => option.id === optionId)
    if (option && option.children.length)
        option.childStatus = !option.childStatus
}
</script>

<style scoped>

a {
    text-decoration: none;
}

.links {
    transition: all 0.3s ease; 
}

.links:hover {
    background-color: rgba(var(--v-theme-primary), 0.1) !important;
}
</style>