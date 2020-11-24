import React from 'react';
import { Link } from 'react-router-dom';
import { MainContainer, ButtonContainer } from './styled';

const PokeCard = () => {
    return (
        <MainContainer>
            <p>pokecard</p>
            <ButtonContainer>
                <button>adicionar</button>
                <Link to={'/details'}>
                    <button>ver detalhe</button>
                </Link>
            </ButtonContainer>
        </MainContainer>
    )
};

export default PokeCard;