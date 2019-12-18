import { Injectable } from "@nger/di"
import { Store } from '@nger/rx.store'
import { DemoStore } from "../store"
import { updateUser } from "../actions"
@Injectable()
export class DemoService {
    constructor(private store: Store<{ demo: DemoStore }>) {
        this.store.subscribe(res => {
            console.log(res.demo)
        })
    }
    add() {
        this.store.dispatch(updateUser({ title: 'updateUser' }))
    }
}