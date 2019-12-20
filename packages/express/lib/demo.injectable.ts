import { Injectable, Injector, REQUEST_ID } from "@nger/core";

@Injectable()
export class Demo {
    index: number = new Date().getTime();
    constructor(private injector: Injector) { }
    test() {
        const cid = this.injector.get(REQUEST_ID)
        return { cid, index: this.index };
    }
}