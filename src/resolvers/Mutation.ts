import { MutationResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
    createTask: async (parent1, args, ctx, info) => {
        return ctx.db.createTask({...args.data});
    }
};
