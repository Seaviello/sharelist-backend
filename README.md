## First time
* `docker-compose up` - create the docker environment
* `npm run prisma -- deploy` - for adding the changes to the prisma server inside container, updates the database

## Prisma related things
* `npm run prisma -- deploy` - after every update to the prisma schema

## Normal development
1. Starting the container
* `docker-compose start` - start the docker container with database
2. Updating graphql schema
* `npm run generate` - creates the types for new schema
* Comparing what has changed and what is new from `./src/generated/tmp-resolvers`
* Updating the resolvers and removing the temporary ones.
3. `npm run dev` - starts listening to ts changes
