# Blanko

### Project setup

1. Start `postgresql` and create both `blanko` and `blanko_test` databases

- Or change `/config/config.json` to use any database.
<!-- 2. Create the `.env` file, use `.env-test` as example -->

2. `$ yarn install`
3. `$ npx sequelize db:migrate` and `$ npx sequelize db:seed:all`
4. `$ yarn dev`
