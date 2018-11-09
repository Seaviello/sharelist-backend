import { IResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

import { Mutation } from './Mutation';
import { Query } from './Query';

export const resolvers: IResolvers<TypeMap> = {
    Mutation,
    Query,
};
