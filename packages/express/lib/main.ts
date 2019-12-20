import { APP_ID } from '@nger/core';
import { expressPlatform } from '@nger/platform.express';
import { AppModule } from './demo.module';

expressPlatform([]).bootstrapModule(AppModule).then(res => {
    const app = res.injector.get<any>(APP_ID)
    app.listen(9000, () => {
        console.log(`expressPlatform`)
    });
})
