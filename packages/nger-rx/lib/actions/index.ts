import { createAction, props } from "@nger/rx.store"
export interface DemoAction {
    title: string;
}
export const updateUser = createAction<string, DemoAction>(`DemoActions.Demo`, props())
export const updateSuccessUser = createAction<string, DemoAction>(`DemoActions.Demo`, props())
export const updateFailUser = createAction<string, DemoAction>(`DemoActions.Demo`, props())
