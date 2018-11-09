import { TaskResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface TaskParent {
    id: string;
    createdAt: string;
    title: string;
}

export const Task: TaskResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    createdAt: parent => parent.createdAt,
    title: parent => parent.title,
};
