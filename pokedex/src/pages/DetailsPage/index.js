import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import Header from '../../components/header/index';
import { DetailsContainer, StatsContainer, TypesContainer, MovesContainer,SpritesContainer, SpritesFront, SpritesBack, TypesMoveContainer } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';

const Details = () => {
    const { states } = useContext(GlobalStateContext)

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonMoves, setPokemonMoves] = useState([]);

    useEffect(() => {
        getPokemonDetail()
    }, [])

    const getPokemonDetail = () => {
        const dataArray = []
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${states.pokemonToDetail}`)
            .then((response) => {
                dataArray.push(response.data)
                setPokemonType(response.data.types)
                setPokemonData(dataArray)
                setPokemonMoves(response.data.moves)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    console.log('aqui', states.pokemonToDetail)

    return (
        <div>
            <Header title={'Nome do Pokémon'} />

            {pokemonData.map((data) => {
                return(
                    <DetailsContainer>
                    <SpritesContainer>
                        <SpritesFront>
                            <img src={data.sprites['front_default']} alt='imagem de frente' />
                        </SpritesFront>
    
                        <SpritesBack>
                            <img src={data.sprites['back_default']} alt='imagem de costas'/>
                        </SpritesBack>
                    </SpritesContainer>
    
                    <StatsContainer>
                        <h1>Stats</h1>
                        <p>HP: {data.stats[0].base_stat} </p>
                        <p>attack: {data.stats[1].base_stat} </p>
                        <p>defense: {data.stats[2].base_stat}</p>
                        <p>special-attack: {data.stats[3].base_stat}</p>
                        <p>special-defense: {data.stats[4].base_stat}</p>
                        <p>speed: {data.stats[5].base_stat}</p>
                    </StatsContainer>
                    <TypesMoveContainer>
                        <TypesContainer>
                            <h2>Types</h2>
                            {pokemonType.map((types) =>{
                               return(
                                <p>{types.type.name}</p>
                               )
                           })}
                        </TypesContainer>
                    </TypesMoveContainer>
                    <MovesContainer>
                            <h1>Moves</h1>
                            {pokemonMoves.map((moves) => {
                                return(
                                <p>{moves.move.name}</p>
                                )
                            })}
                    </MovesContainer>
                </DetailsContainer>
                )
            })}
        </div>
    )
};

export default Details;