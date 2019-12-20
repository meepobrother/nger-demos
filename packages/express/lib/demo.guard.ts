import { Injectable, CanLoad } from "@nger/core";

@Injectable()
export class DemoCanLoad implements CanLoad {
    canLoad() {
        return true;
    }
}