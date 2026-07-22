const { Datatypes } = require('sequelize');
const sequelize = require('../config/database');





const Cocina = sequelize.define('Cocina', {


id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

nombre: { type: DataTypes.STRING(50), unique: true, allowNull: false},





}, { tableName: 'cocina', timestamps: false });


module.exports =  Cocina;
