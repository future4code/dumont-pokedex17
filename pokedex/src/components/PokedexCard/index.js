import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MainContainer, ButtonContainer, Button } from './styled';

const PokedexCard = (props) => {
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
                <Button onClick={props.removePokemon}>remover</Button>
                <Link to={'/details'}>
                    <Button>ver detalhe</Button>
                </Link>
            </ButtonContainer>
        </MainContainer>
    )
};
export default PokedexCard;