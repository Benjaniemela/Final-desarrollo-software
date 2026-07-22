const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');





const Ingrediente = sequelize.define ('Ingrediente',   {




id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

nombre: { type: DataTypes.STRING(50), unique: true, allowNull: false},




    

}, {tableName:  'Ingredientes', timestamps: false });


module.exports = Ingrediente;