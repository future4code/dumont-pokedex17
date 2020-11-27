import React, { useContext } from 'react';
import Header from '../../components/header/index';
import PokeCard from '../../components/PokemonCard';
import { CardsContainer } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';

const Pokedex = () => {

    const { states, setters } = useContext(GlobalStateContext)

    const pokemonsInPokedex = states.pokedex && states.pokedex.map((pokemon) => {
        return (
            <PokeCard
                key={pokemon.name}
                pokemonName={pokemon.name}
                pokemonURL={pokemon.url}
                setPokemon = {() => setPokemon(pokemon.name)}
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