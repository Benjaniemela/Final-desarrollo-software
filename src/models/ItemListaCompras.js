const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');




const  ItemListaCompras = sequelize.define (' ItemListaCompras', {


    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cantidad: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
unidad: { type: DataTypes.STRING(30), allowNull: false},
listaComprasId: {type: DataTypes.INTEGER, allowNull: false},
recetaId: {type: DataTypes.INTEGER, allowNull: false},





}, { tableName: 'items_listas_compras', timestamps: false });



module.exports = ItemListaCompras;


