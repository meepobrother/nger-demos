import { Injectable } from "@nger/di";
import { createEffect, ofType, Actions } from "@nger/rx.effects";
import { switchMap } from "rxjs/operators";
import { updateUser } from "../actions";
import { EMPTY } from "rxjs";

@Injectable()
export class DemoEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateUser),
            switchMap(action => {
                return EMPTY;
            })
        )
    );
    constructor(
        private actions$: Actions
    ) { }
}