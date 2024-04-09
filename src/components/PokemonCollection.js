import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, filteredPokemon}) {

  const pokemonList = filteredPokemon.map((pokemon)=> <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
