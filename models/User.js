"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      email: DataTypes.STRING
    },
    {
      classMethods: {
        associate: models => {
          // associations can be defined here
        }
      }
    }
  );
  return user;
};
