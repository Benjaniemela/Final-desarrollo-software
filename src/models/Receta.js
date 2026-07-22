const { DataTypes, INTEGER } = require ('sequelize');
const sequelize = require ('../config/database');




const Receta = sequelize.define ('Receta', {
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    
titulo: { type: DataTypes.STRING(150), allowNull: false}, 
descripcion:  { type: DataTypes.TEXT    },
tiempoPreparacion: {type: DataTypes.INTEGER, Comment: 'Tiempo preparacion en algunos minutos'},
tiempoCoccion: { type:  DataTypes.INTEGER, Comment: 'Tiempo de coccion en algunos minutos ' },

dificultad: {
    type: DataTypes.ENUM ('Facil', 'Medio', 'Dificil'),

        defaultValue: 'Medio',
        allowNull: false
},

usuarioId: { type: DataTypes.INTEGER, allowNull: false }
}, {tableName:  'recetas', timestamps: true});

module.exports = Receta;