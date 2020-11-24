import React from 'react';
import { MainContainer, ButtonContainer } from './styled';

function PokeCard() {
    return(
        <MainContainer>
            <p>pokecard</p>
            <ButtonContainer>
                <button>adicionar</button>
                <button>ver detalhe</button>
            </ButtonContainer>
        </MainContainer>
    );
}

export default PokeCard;