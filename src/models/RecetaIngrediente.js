const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');






const RecetaIngrediente = sequelize.define ('RecetaIngrediente', {


id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
cantidad: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
unidad: { type: DataTypes.STRING(30), allowNull: false},
recetaId: {type: DataTypes.INTEGER, allowNull: false},
ingredienteId: {type: DataTypes.INTEGER, allowNull: false}






}, {tableName:'receta_ingredientes', timestamps: false });



module.exports = RecetaIngrediente; 