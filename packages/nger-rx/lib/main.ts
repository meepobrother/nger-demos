import { platformCore } from "@nger/platform.core";
import { AppModule } from "./app";
import { DemoService } from "./service";

platformCore([]).bootstrapModule(AppModule).then(res => {
    const demoService = res.injector.get(DemoService)
    demoService.add();
})
