import React from 'react';
import Header from '../../components/Header';
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