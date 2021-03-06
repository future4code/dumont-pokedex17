import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MainContainer, ButtonContainer, Button } from './styled';

const PokeCard = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonImage, setPokemonImage] = useState()

    useEffect(() => {
        getPokemonDetails()
    }, [])

    const getPokemonDetails = () => {
        axios
            .get(`${props.pokemonURL}`)
            .then((response) => {
                setPokemonDetails(response)
                setPokemonImage(response.data.sprites.front_default)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <MainContainer>
            <p>{props.pokemonName}</p>
            <img src={pokemonImage} />
            <ButtonContainer>
                <button onClick={props.addToPokedex}>adicionar</button>
                <Link to={'/details'}>
                    <button onClick={props.setPokemon}>ver detalhe</button>
                </Link>
            </ButtonContainer>
        </MainContainer>
    )
};

export default PokeCard