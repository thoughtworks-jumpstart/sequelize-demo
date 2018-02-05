# Sequelize App Demo

### Getting started

- Clone this repo
- `yarn install` to install all required dependencies
- Run tests: `yarn test:watch`
- Start application: `nodemon server.js` (Run `yarn add global nodemon` to install `nodemon` first, if you haven't installed it)


### Incorporating Sequelize as an ORM

- yarn add pg@6.4.2 pg-hstore sequelize
  - we have to use pg@6.4.2 because of a bug in findOrCreate in the latest version (7.4.1)
    -  see: https://github.com/sequelize/sequelize/issues/8043
- createdb sequelize_demo_development
- sequelize init
- update `config/config.json`:
```json
{
  "development": {
    "database": "sequelize_demo_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "sequelize_demo_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "sequelize_demo_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

```

- sequelize model:create --name user --attributes firstName:string,lastName:string,age:integer,email:string
  - if you get an error saying that user.js already exist, follow the instructions and add a `--force` option
- Run db migration`sequelize db:migrate`
  - if you want to undo migration: `sequelize db:migrate:undo`


---
Copyright (c) 2018 ThoughtWorks. For personal use and training purposes only; not to be copied or distributed without further approval.
