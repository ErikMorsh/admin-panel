import type { RootState } from "./root-state"

export type Getters = {
    getMessage: (state: RootState) => typeof state.message
    getScreenSize: (state: RootState) => typeof state.screenSize
    getDrawerState: (state: RootState) => typeof state.drawerState
}

export const getters: Getters = {
    getMessage(state) {
        return state.message;
    },
    getScreenSize(state) {
        return state.screenSize
    },
    getDrawerState(state) {
        return state.drawerState
    },
}