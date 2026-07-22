const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');




const Paso = sequelize.define('Paso', {


id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

numeroPaso: {type: DataTypes.INTEGER, allowNull: false},

instruccion: {type: DataTypes.TEXT, allowNull: false}, 

recetaId: {type: DataTypes.INTEGER, allowNull: false}



}, {tableName: 'pasos' , 
    timestamps: false,
    indexes: [{unique: true, fields: ['recetaId', 'numeroPaso']}]
});


module.exports = Paso;