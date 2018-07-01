const DataTypes = require("sequelize");

module.exports = {
  currency: {
    type: DataTypes.STRING(3),
    defaultValue: "USD",
    validate: {
      len: [3, 3]
    },
    allowNull: false,
    set(val) {
      if (val && val.toUpperCase) {
        this.setDataValue("currency", val.toUpperCase());
      }
    }
  }
};
