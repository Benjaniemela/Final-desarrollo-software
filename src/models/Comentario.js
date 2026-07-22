const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');





const Comentario = sequelize.define ('sequelize',{



    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    texto: {type: DataTypes.TEXT, allowNull: false},
    usuarioId:  {type: DataTypes.INTEGER, allowNull: false},
    recetaId:  {type: DataTypes.INTEGER, allowNull: false},





}, {
    tableName: 'comentarios', timetamps: true,


});


module.exports= Comentario;