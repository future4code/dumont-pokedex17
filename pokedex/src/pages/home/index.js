import React from 'react';
import Header from '../../components/header/index'
import PokeCard from '../../components/pokeCard/index'
import { CardsContainer } from './styled'

function Home() {
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
    );
}

export default Home;