const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const receta = require('./Receta');
const Categoria = require('./Categoria');
const Cocina = require('./Cocina');
const Ingrediente = require('./Ingrediente');
const Paso = require('./Paso');
const RecetaIngrediente = require('./RecetaIngrediente');
const Calificacion = require('./Calificacion');
const Comentario = require('./Comentario');
const ListaCompras = require('./ListaCompras');
const ItemListaCompras = require('./ItemListaCompras');
const Receta = require('./Receta');



Usuario.hasMany(Receta, {foreingKey: 'usuarioId', onDelete: 'CASCADE'});
Receta.belongsTo(Usuario, {foreingKey: 'usuarioId', as: 'autor'});



Receta.belongsToMany(Categoria, { through: 'RecetaCategoria', foreingKey:'recetaId'})
Receta.belongsTo(Receta, {foreingKey: 'RecetaCategoria', foreingKey:'categoriaId'});




















