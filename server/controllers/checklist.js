const {User} = require('../models/user')
const {Checklist} = require('../models/checklist')

module.exports = {
    addPokemon: async (req, res) => {
        try{
            const {pokemonId, pokemonName, imgUrl, shinyImgUrl, quantity, userId} = req.body
            await Post.create({pokemonId, pokemonName, imgUrl, shinyImgUrl, quantity: 1, userId})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN addPokemon')
            console.log(error)
            res.sendStatus(400)
        }
    },

   
}