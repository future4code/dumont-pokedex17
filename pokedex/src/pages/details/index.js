import React from 'react';
import Header from '../../components/header/index'
import { DetailsContainer, ImagesContainer, StatsContainer, TypesMovesContainer } from './styled';

function Details() {
    return(
        <div>
            <Header title={'Nome do Pokémon'} />
            <DetailsContainer>
                <ImagesContainer>
                    <div>
                        <img src='https://picsum.photos/200' />
                    </div>

                    <div>
                        <img src='https://picsum.photos/200' />
                    </div>
                </ImagesContainer>

                <StatsContainer>
                    stats
                </StatsContainer>

                <TypesMovesContainer>
                    <div>tipo</div>
                    <div>moves</div>
                </TypesMovesContainer>
            </DetailsContainer>
        </div>
    );
}

export default Details;