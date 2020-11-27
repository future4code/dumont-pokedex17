import React, { useContext } from 'react';
import Header from '../../components/header/index';
import PokedexCard from '../../components/PokedexCard';
import { CardsContainer } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';

const Pokedex = () => {
    const { states, setters } = useContext(GlobalStateContext)
  
    const removeFromPokedex =(pokeToRemove) => {
        const index = states.pokedex.findIndex((pokemon) => pokemon.name === pokeToRemove.name)
        let newPokedex = [...states.pokedex]
        newPokedex.splice(index, 1)
        setters.setPokedex(newPokedex)
    }

    const pokemonsInPokedex = states.pokedex && states.pokedex.map((pokemon) => {
        return (
            <PokeCard
                key={pokemon.name}
                pokemonName={pokemon.name}
                pokemonURL={pokemon.url}
                setPokemon = {() => setPokemon(pokemon.name)}
                removePokemon={() => removeFromPokedex(pokemon)}
            />
        )
    })

    const setPokemon = (pokemon) => {
        setters.setPokemonToDetail(pokemon)
    }

    return (
        <div>
            <Header title={'Minha Pokédex'} />

            <CardsContainer>
                {pokemonsInPokedex}
            </CardsContainer>
        </div>
    )
};
export default Pokedex;