const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cidenet', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otherName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstLastName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondLastName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    identificationNumber:{
      type: DataTypes.STRING,
      allowNull: false,    
    }
  });
};
