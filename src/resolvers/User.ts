import { UserResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface UserParent {
    id: string;
    name: string;
    email: string;
}

export const User: UserResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    name: parent => parent.name,
    email: parent => parent.email,
};
