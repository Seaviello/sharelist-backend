import { ITypeMap } from '../../generated/resolvers';

import { MutationParent } from '../Mutation';
import { QueryParent } from '../Query';
import { TaskParent } from '../Task';
import { UserParent } from '../User';

import { Context } from './Context';

export interface TypeMap extends ITypeMap {
    Context: Context;
    MutationParent: MutationParent;
    QueryParent: QueryParent;
    TaskParent: TaskParent;
    UserParent: UserParent;
}
