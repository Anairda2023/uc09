const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./categoria');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const Produto = sequelize.define('Produto', {
    
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    preco:{
        type: DataTypes.FLOAT,
        allowNull:false,
    },
    categoriaId:{
        type: DataTypes.INTEGER,
        references:{
            model: Categoria,
            key: 'id'

        }
        
    }
});

Produto.belongsTo(Categoria, {FOREIGNKEYS:'categoriaId'});

Categoria.hasMany(Produto,{FOREIGNKEYS:'categoriaId'});

module.exports = Produto;
