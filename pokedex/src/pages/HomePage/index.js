import React from 'react';
import Header from '../../components/header/index';
import PokeCard from '../../components/PokemonCard';
import { CardsContainer } from './styled';

const Home = () => {
    return (
        <div>
            <Header title={'Lista de Pokémons'} />
            
            <CardsContainer>
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
            </CardsContainer>
        </div>
    )
};

export default Home;