const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        
    },
    nascimento:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    
    nomeUser:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false,

    }
    



});

module.exports = User;