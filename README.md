# Development


## First time
* `docker-compose up` - create the docker environment

## Normal development
* `docker-compose start` - start the docker container with database
* `npm run prisma -- deploy` - for adding the changes to the prisma server inside container, updates the database
* `npm run prisma -- generate` - to create the grapql schema for client usage
* `npm run dev` - starts listening to graphql and ts changes
