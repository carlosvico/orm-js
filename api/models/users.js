'use strict';

module.exports = (sequelize, DataTypes) => {
  const  Users = sequelize.define('Users',{
    name:  DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
    
  }, {});
  Users.associate = function (models) {
    
  };
  return Users;
};