import { Controller, Post, Body } from '@nger/core';
import { PgGraphql } from '@nger/pg-graphql';
@Controller('/')
export class DemoController {
    constructor(private graphql: PgGraphql) { }
    @Post('/graphql')
    handlerPg(
        @Body(`query`) query: string,
        @Body(`variables`) variables: any
    ) {
        return this.graphql.query(query, variables)
    }
}
