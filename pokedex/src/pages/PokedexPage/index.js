import React, { useContext } from 'react';
import Header from '../../components/header/index';
import PokeCard from '../../components/PokemonCard';
import { CardsContainer } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';

const Pokedex = () => {
    const { states } = useContext(GlobalStateContext)

    const pokemonsInPokedex = states.pokedex && states.pokedex.map((pokemon) => {
        return (
            <PokeCard
                key={pokemon.name}
                pokemonName={pokemon.name}
                pokemonURL={pokemon.url}
            />
        )
    })

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