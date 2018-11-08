import { Prisma } from './generated/prisma-client'

export const db = new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT!,
    secret: process.env.PRISMA_SECRET!,
    // debug: true,
});
