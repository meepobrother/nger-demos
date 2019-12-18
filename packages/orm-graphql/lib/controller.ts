import { Controller, Post, Body } from '@nger/core';
import { PgGraphql } from '@nger/pg-graphql';
@Controller('/')
export class DemoController {
    constructor(private graphql: PgGraphql) { }
    @Post('/graphql')
    handlerPg(
        @Body({
            property: `query`
        }) query: string,
        @Body({
            property: 'variables'
        }) variables: any
    ) {
        return this.graphql.query(query, variables)
    }
}
