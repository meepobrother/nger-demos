import { Reducer, Case } from "@nger/core";
import { DemoStore } from "../store";
import { updateSuccessUser, updateFailUser, DemoAction } from '../actions';
@Reducer({
    name: `demo`,
    store: DemoStore
})
export class DemoReducer {
    @Case(updateSuccessUser)
    getUser(state: DemoStore, action: DemoAction) {
        state.tilte = action.title;
        return state;
    }
    @Case(updateFailUser)
    updateFailUser(state: DemoStore, action: DemoAction) {
        return state;
    }
}