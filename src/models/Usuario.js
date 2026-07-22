const { Datatypes } = require("sequelize");
const sequelize = require("../config/database");


const Usuario = sequelize.define(
  "Usuario",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombreUsuario: {
      type: Datatypes.STRING(50),
      unique: true,
      allowNull: false,
    },

    email: {
      type: Datatypes.STRING(255),
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },

    contrasenaHash: { type: Datatypes.STRING(255), allowNull: false },
  },
  { tableName: "usuario", timestamps: true },
);

module.exports = Usuario;
