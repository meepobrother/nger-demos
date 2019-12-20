import { DemoCanLoad } from "./demo.guard";
import { Module, OnModuleInit, Injector } from "@nger/core";
import { DemoControler } from "./demo.controller";

@Module({
    providers: [
        DemoCanLoad
    ],
    controllers: [DemoControler]
})
export class AppModule implements OnModuleInit {
    constructor(private injector: Injector) { }
    ngOnModuleInit() { }
}