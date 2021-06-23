## Description

This is a simple REST API which can be used for todo/task tracking applications.

## Pre-requisites

- Install and setup PostgreSQL in your machine
- Create a new database called `todoapi`
- Run the API to create the database migrations
- To use this `req.http` file make sure you install the [VSCode REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Technologies Used

- TypeScript
- NestJS
- TypeORM
- PostgreSQL

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## In Progress

- Writing Unit tests

## License

This project is licensed with the [MIT License](https://opensource.org/licenses/MIT)
