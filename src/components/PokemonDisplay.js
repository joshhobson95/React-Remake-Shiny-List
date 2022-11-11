import React from 'react'
import PokemonCard from './PokemonCard'
import "./PokemonDisplay.css"


function PokemonDisplay({page, setPage, pokemonList}) {


    const pokemonCardDisplay = pokemonList.map((pokemon, index) => {
        return (
            <PokemonCard pokemon={pokemon} />
        )
    })
    


  return (
    <div className='pokemon-container'>
        <div className='pokemon-display'>{pokemonCardDisplay}</div>
    </div>
  )
}

export default PokemonDisplay