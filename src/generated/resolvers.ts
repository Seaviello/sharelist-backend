/* DO NOT EDIT! */
import { GraphQLResolveInfo } from 'graphql';

export interface ITypeMap {
    Context: any;

    MutationParent: any;
    QueryParent: any;
}

export namespace MutationResolvers {
    export type HiResolver<T extends ITypeMap> = (
        parent: T['MutationParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    export interface Type<T extends ITypeMap> {
        hi: (
            parent: T['MutationParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | null | Promise<string | null>;
    }
}

export namespace QueryResolvers {
    export type HiResolver<T extends ITypeMap> = (
        parent: T['QueryParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    export interface Type<T extends ITypeMap> {
        hi: (
            parent: T['QueryParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | null | Promise<string | null>;
    }
}

export interface IResolvers<T extends ITypeMap> {
    Mutation: MutationResolvers.Type<T>;
    Query: QueryResolvers.Type<T>;
}
