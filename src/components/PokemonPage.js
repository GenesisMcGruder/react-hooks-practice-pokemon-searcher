import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemons(data))
  }, [])

  

  function handleChange(e){
    setSearch(e.target.value)
  }

    const filteredPokemon = pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(search))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search  search={search} handleChange={handleChange}/>
      <br />
      <PokemonCollection pokemons={pokemons} filteredPokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
