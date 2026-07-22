const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');





const  ListaCompras = sequelize.define ('ListaCompras',{



    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: DataTypes.STRING(100), allowNull: false},
        usuarioId:  {type: DataTypes.INTEGER, allowNull: false},
    usuarioId:  {type: DataTypes.INTEGER, allowNull: false},








}, {tableName:'lista_compras', timestamps: true });


module.exports = ListaCompras;