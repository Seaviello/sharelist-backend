import { Prisma } from './generated/prisma-client'
import { ContextParameters } from 'graphql-yoga/dist/types';

export type Context = ContextParameters & {
    db: Prisma
}
