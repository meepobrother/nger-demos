import { Controller, Injector, Get, Session, Ip, Cid, Param, Query } from "@nger/core";
import { DemoCanLoad } from "./demo.guard";
import { Demo } from "./demo.injectable";

@Controller({
    path: '/',
    useGuards: [DemoCanLoad],
    providers: [Demo]
})
export class DemoControler {
    index: number = new Date().getTime();
    constructor(private injector: Injector) { }

    @Get(`/`)
    onIndex(@Session() session: object, @Ip() ip: string, @Cid() cid: Buffer) {
        const views = Reflect.get(session, 'views') || 0;
        Reflect.set(session, 'views', views + 1);
        const requestId = this.injector.get(Demo).test();
        return { views, ip, cid, requestId, index: this.index };
    }

    @Get(`/param/:id`)
    onParam(@Param({ property: 'id' }) id: number, @Param() param: object) {
        return { id, param }
    }

    @Get(`/query/:id`)
    onQuery(@Query({ property: 'id' }) id: number, @Query() query: object) {
        return { id, query }
    }
}