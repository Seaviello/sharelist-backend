import { QueryResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
    hi: async (parent, args, ctx, info) => null,
};
