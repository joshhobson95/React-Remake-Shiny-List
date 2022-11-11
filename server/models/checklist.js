const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
Checklist: sequelize.define('checklist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pokemonId: DataTypes.INTEGER,
    pokemonName: DataTypes.STRING,
    imgUrl: DataTypes.TEXT,
    shinyImgUrl: DataTypes.TEXT,
    quantity: DataTypes.INTEGER

})
}