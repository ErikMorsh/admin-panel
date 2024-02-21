import { store, type Store } from "@/vuex/store";


// For Registering in app with pluginManager.ts file
export default store


// For using this.store in Options API
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store
    }
}

// For using state in Composition API
export function useStore() {
    return store as Store
}
