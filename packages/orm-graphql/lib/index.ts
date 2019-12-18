import { Module, OnModuleInit, PLATFORM_INITIALIZER, Injector, AppToken, Config } from '@nger/core';
import { ngerOrmCoreHandlers, Driver } from '@nger/orm.core';
import { expressPlatform } from '@nger/platform.express';
import { PgGraphql, PgGraphqlModule } from '@nger/pg-graphql';
import express, { Application } from 'express';
import { join } from 'path';
import { ApolloServer } from 'apollo-server';
import { DemoController } from './controller';
@Module({
    imports: [
        PgGraphqlModule.forFeature({
            name: 'default',
            uuidExtension: 'pgcrypto',
            database: `zp`,
            schema: 'public',
            entities: [],
            replication: {
                master: {
                    host: `193.112.55.191`,
                    port: 5432,
                    username: `magnus`,
                    password: `magnus`
                }
            }
        })
    ],
    controllers: [
        DemoController
    ]
})
export class AppModule implements OnModuleInit {
    ngOnModuleInit() {
        console.log(`AppModule`)
    }
}
const platform = expressPlatform([
    {
        provide: PLATFORM_INITIALIZER,
        useFactory: (injector: Injector) => {
            return () => {
                setTimeout(() => {
                    const app = injector.get<Application>(AppToken);
                    app.use(express.static(join(__dirname, 'build')))
                }, 100)
            }
        },
        deps: [Injector],
        multi: true
    },
    ...ngerOrmCoreHandlers
]);
platform.bootstrapModule(AppModule).then(async res => {
    const config = res.injector.get(Config);
    const port = config.get('PORT', 5000);
    const driver = res.injector.get<Driver<any>>(Driver);
    const graphql = res.injector.get(PgGraphql)
    const app = res.injector.get<express.Application>(AppToken);
    await driver.connect();
    const server = new ApolloServer({
        schema: await graphql.getSchema(),
        playground: true
    });
    const midleware = server.getMiddleware();
    app.get('/graphql', midleware);
    app.listen(port, `0.0.0.0`, () => {
        console.log(`app start at http://0.0.0.0:${port}`);
    });
    return app;
});
