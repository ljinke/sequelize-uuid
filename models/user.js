const { currency } = require("../DataTypes/currency");

module.exports = function(sequelize, Sequelize) {
  require("../DataTypes/ip")(Sequelize);

  var User = sequelize.define(
    "User",
    {
      id: { type: Sequelize.UUID, primaryKey: true },
      name: Sequelize.STRING,
      salary: currency,
      last_access: Sequelize.IP,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    },
    { underscored: true }
  );
  return User;
};
