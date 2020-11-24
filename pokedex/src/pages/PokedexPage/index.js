import React from 'react';
import Header from '../../components/Header';
import PokeCard from '../../components/PokemonCard';
import { CardsContainer } from './styled';

const Pokedex = () => {
    return (
        <div>
            <Header title={'Minha Pokédex'} />

            <CardsContainer>
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
            </CardsContainer>
        </div>
    )
};

export default Pokedex;