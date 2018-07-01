"use strict";

const { currency } = require("../DataTypes/currency");
require("../DataTypes/ip");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: Sequelize.UUID,
      name: Sequelize.STRING,
      salary: currency,
      last_access: Sequelize.IP,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
