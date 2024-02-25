import { MutationTypes } from "./mutation-type";
import type { MutationTree } from "vuex/types/index.js";
import type { RootState } from "./root-state";

export type Mutations<S = RootState> = {
    [MutationTypes.SET_MESSAGE]: (state: S, payload: string) => void;
    [MutationTypes.SET_SCREEN_SIZE]: (state: S, payload: number) => void;
    [MutationTypes.SET_DRAWER_STATE]: (state: S, payload: boolean) => void;
}

export const mutations: MutationTree<RootState> & Mutations = {
    [MutationTypes.SET_MESSAGE](state, payload) {
        state.message = payload
    },
    [MutationTypes.SET_SCREEN_SIZE](state, payload) {
        state.screenSize = payload
    },
    [MutationTypes.SET_DRAWER_STATE](state, payload) {
        state.drawerState = payload
    },
}