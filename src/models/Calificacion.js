const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');





const Calificacion = sequelize.define('Calificacion', {


id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

puntaje: {type: DataTypes.INTEGER, validate: {min: 1, max: 5} },
usuarioId: {type: DataTypes.INTEGER, allowNull: null},
recetaId: {type: DataTypes.INTEGER, allowNull: false}







},{

    tableName: 'calificaciones' , 
    timestamps: false, 
    indexes: [{unique: true, fields: ['usuarioId', 'recetaId']}]





});


module.exports = Calificacion;




