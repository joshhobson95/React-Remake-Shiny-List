import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react"
import PokemonDisplay from './PokemonDisplay';
// import { Switch, Route, Redirect } from 'react-router-dom';


function Home() {

const [pokemonList, setPokemonList] = useState([]);
const [page, setPage] = useState(1);





function getData() {
    axios.get(
     'https://pokeapi.co/api/v2/pokemon?limit=1200&offset=0'
    )
    .then((res) => {
      setPokemonList(res.data.results)
    })
  }
  useEffect(() => {
    getData();
  }, [page]);






  return (
    <div>
    <PokemonDisplay 
    page={page}
    setPage={setPage}
    pokemonList={pokemonList} />
    </div>
  )
}

export default Home