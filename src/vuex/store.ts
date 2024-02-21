import { createStore, Store as VuexStore } from "vuex";
import type { CommitOptions, DispatchOptions } from 'vuex'

import { rootState, type RootState } from "./root-state";
import { mutations, type Mutations } from "./mutations";
import { actions, type Actions } from "./actions";
import { getters, type Getters } from "./getters";


export const store = createStore({
    state: rootState,
    mutations,
    actions,
    getters,
})

export type Store = Omit<VuexStore<RootState>, 'commit' | 'dispatch' | 'getters'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions, P extends Parameters<Actions[K]>[1]>(
        key: K,
        payload: P,
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}