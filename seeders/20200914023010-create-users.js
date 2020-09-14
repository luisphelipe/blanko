"use strict";

const { Factory } = require("rosie");
const { toRoman } = require("roman-numerals");
const moment = require("moment");
const timestamp_with_timezone = "YYYY-MM-DD HH:mm:ss Z";

const UserFactory = new Factory()
  .sequence("name", (i) => `Robot ${toRoman(i)}`)
  .sequence("email", (i) => `robot${i}@test.com`)
  .sequence("createdAt", (i) =>
    moment()
      .subtract(100 - i, "second")
      .format(timestamp_with_timezone)
  )
  .sequence("updatedAt", (i) =>
    moment()
      .subtract(100 - i, "second")
      .format(timestamp_with_timezone)
  );

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete("Users", null, {});
      await queryInterface.bulkInsert("Users", UserFactory.buildList(100));
    } catch (err) {
      throw err;
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
