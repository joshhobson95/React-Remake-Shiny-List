import React from 'react'
import './PokemonCard.css'


function PokemonCard({pokemon}) {
  return (
    <div className='card'>
    {pokemon.name}
    {pokemon.id}
    <button>Check dummy</button>
</div>
  )
}

export default PokemonCard