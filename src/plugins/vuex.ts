import { store, type Store } from "@/vuex/store";


// For using this.store in Options API
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store
    }
}

// A hook for using state in Composition API
export function useStore() {
    return store as Store
}


// For Registering in app with pluginManager.ts file
export default store