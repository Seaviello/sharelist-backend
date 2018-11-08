import { createServer } from './createServer'
import { db } from './db'

const server = createServer();

server.start(({ port }) =>
    console.log(`Server is running on http://localhost:${port}`),
);
