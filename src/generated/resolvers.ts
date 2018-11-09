/* DO NOT EDIT! */
import { GraphQLResolveInfo } from 'graphql';

export interface ITypeMap {
    Context: any;

    MutationParent: any;
    QueryParent: any;
    TaskParent: any;
    UserParent: any;
}

export namespace MutationResolvers {
    export interface TaskCreateInput {
        title: string;
    }

    export interface ArgsCreateTask<T extends ITypeMap> {
        data: TaskCreateInput;
    }

    export type CreateTaskResolver<T extends ITypeMap> = (
        parent: T['MutationParent'],
        args: ArgsCreateTask<T>,
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => T['TaskParent'] | Promise<T['TaskParent']>;

    export interface Type<T extends ITypeMap> {
        createTask: (
            parent: T['MutationParent'],
            args: ArgsCreateTask<T>,
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => T['TaskParent'] | Promise<T['TaskParent']>;
    }
}

export namespace QueryResolvers {
    export type TasksResolver<T extends ITypeMap> = (
        parent: T['QueryParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => T['TaskParent'][] | Promise<T['TaskParent'][]>;

    export interface Type<T extends ITypeMap> {
        tasks: (
            parent: T['QueryParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => T['TaskParent'][] | Promise<T['TaskParent'][]>;
    }
}

export namespace TaskResolvers {
    export type IdResolver<T extends ITypeMap> = (
        parent: T['TaskParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    export type CreatedAtResolver<T extends ITypeMap> = (
        parent: T['TaskParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    export type TitleResolver<T extends ITypeMap> = (
        parent: T['TaskParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    export interface Type<T extends ITypeMap> {
        id: (
            parent: T['TaskParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | Promise<string>;
        createdAt: (
            parent: T['TaskParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | Promise<string>;
        title: (
            parent: T['TaskParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | Promise<string>;
    }
}

export namespace UserResolvers {
    export type IdResolver<T extends ITypeMap> = (
        parent: T['UserParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    export type NameResolver<T extends ITypeMap> = (
        parent: T['UserParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    export type EmailResolver<T extends ITypeMap> = (
        parent: T['UserParent'],
        args: {},
        ctx: T['Context'],
        info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    export interface Type<T extends ITypeMap> {
        id: (
            parent: T['UserParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | Promise<string>;
        name: (
            parent: T['UserParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | Promise<string>;
        email: (
            parent: T['UserParent'],
            args: {},
            ctx: T['Context'],
            info: GraphQLResolveInfo,
        ) => string | Promise<string>;
    }
}

export interface IResolvers<T extends ITypeMap> {
    Mutation: MutationResolvers.Type<T>;
    Query: QueryResolvers.Type<T>;
    Task: TaskResolvers.Type<T>;
    User: UserResolvers.Type<T>;
}
