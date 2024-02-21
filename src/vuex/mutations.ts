import { MutationTypes } from "./mutation-type";
import type { MutationTree } from "vuex/types/index.js";
import type { RootState } from "./root-state";

export type Mutations<S = RootState> = {
    [MutationTypes.SET_MESSAGE]: (state: S, payload: string) => void;
}

export const mutations: MutationTree<RootState> & Mutations = {
    [MutationTypes.SET_MESSAGE](state, payload) {
        state.message = payload
    },
}