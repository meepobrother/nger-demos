import { Module, RootActionReducerMapToken, Injector } from '@nger/core';
import { StoreModule } from '@nger/rx.store';
import { EffectsModule } from '@nger/rx.effects';
import { platformCore, getReducer } from '@nger/platform.core';
import { DemoEffects } from './effects';
import { DemoService } from './service';
import { DemoStore } from './store';
import { DemoReducer } from './reducer';

@Module({
    imports: [
        StoreModule.forRoot(RootActionReducerMapToken),
        EffectsModule.forRoot([
            DemoEffects
        ])
    ],
    providers: [
        DemoService,
        DemoStore,
        {
            provide: RootActionReducerMapToken,
            useFactory: (injector: Injector) => {
                const reducer = getReducer(DemoReducer, injector);
                return reducer;
            },
            deps: [Injector]
        }
    ]
})
export class AppModule { }
