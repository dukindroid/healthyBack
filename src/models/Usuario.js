const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("usuario", {
    id: {
      type: DataTypes.BIGINT,
        // defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      
    },
    telefono: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    uid:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    codPostal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    activo:{
      type: DataTypes.BOOLEAN,
      defaultValue:true,
    },
  });
};
