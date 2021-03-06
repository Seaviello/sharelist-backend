import { GraphQLServer } from 'graphql-yoga';
import {Mutation} from './resolvers/Mutation';
import {Query} from './resolvers/Query';
import {db} from './db';

// Create the GraphQL Yoga Server

export function createServer() {
    return new GraphQLServer({
        typeDefs: './src/schema.graphql',
        resolvers: {
            Mutation,
            Query,
        } as any,
        context: req => ({ ...req, db }),
    });
}
