import React from 'react';
import Header from '../../components/header/index'
import PokeCard from '../../components/pokeCard/index'
import { CardsContainer } from './styled'

function Pokedex() {
    return(
        <div>
            <Header />
            <CardsContainer>
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
            </CardsContainer>
        </div>
    );
}

export default Pokedex;