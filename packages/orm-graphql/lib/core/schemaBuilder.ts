import { GraphQLSchema } from 'graphql';
import { Injectable } from '@nger/core';
@Injectable()
export abstract class SchemaBuilder {
    abstract buildSchema(): GraphQLSchema;
}
