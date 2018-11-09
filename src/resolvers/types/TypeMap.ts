import { ITypeMap } from '../../generated/resolvers';

import { MutationParent } from '../Mutation';
import { QueryParent } from '../Query';

import { Context } from './Context';

export interface TypeMap extends ITypeMap {
    Context: Context;
    MutationParent: MutationParent;
    QueryParent: QueryParent;
}
