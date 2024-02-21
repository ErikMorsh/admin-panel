import type { ActionContext, ActionTree } from "vuex/types/index.js";
import type { Mutations } from "./mutations";
import type { RootState } from "./root-state";
import { MutationTypes } from "./mutation-type";
import { ActionTypes } from "./action-type";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<RootState, RootState>, 'commit'>

export interface Actions {
    [ActionTypes.SET_MESSAGE]: (context: AugmentedActionContext, payload: string) => void
}

export const actions: ActionTree<RootState, RootState> & Actions = {
    [ActionTypes.SET_MESSAGE]: (context, payload) => {
        context.commit(MutationTypes.SET_MESSAGE, payload)
    },
}