import type { RootState } from "./root-state"

export type Getters = {
    getMessage: (state: RootState) => typeof state.message
}

export const getters: Getters = {
    getMessage(state) {
        return state.message;
    },
}