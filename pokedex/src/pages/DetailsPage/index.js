import {React, useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/header/index';
import { DetailsContainer, StatsContainer, TypesContainer, MovesContainer,SpritesContainer, SpritesFront, SpritesBack, TypesMoveContainer } from './styled';

const Details = () => {
    const [pokemon] = useState('stunky');
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonMoves, setPokemonMoves] = useState([]);

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        const toArray = []
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => {
            toArray.push(res.data)
            setPokemonType(res.data.types)
            setPokemonData(toArray)
            setPokemonMoves(res.data.moves)
            console.log(res)
        })
        .catch((e) => {
            console.log(e.message)
        })
    }
    return (
        <div>
            <Header title={'Nome do Pokémon'} />

            {pokemonData.map((data) => {
                return(
                    <DetailsContainer>
                    <SpritesContainer>
                        <SpritesFront>
                            <img src={data.sprites['front_default']} />
                        </SpritesFront>
    
                        <SpritesBack>
                            <img src={data.sprites['back_default']} />
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