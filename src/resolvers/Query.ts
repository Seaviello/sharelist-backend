import { QueryResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
    tasks: (parent1, args, ctx) => {
        return ctx.db.tasks();
    },
}


