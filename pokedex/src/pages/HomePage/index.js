import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/index';
import PokeCard from '../../components/PokemonCard';
import { CardsContainer } from './styled';

const Home = () => {
    const [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            .then((response) => {
                setPokemonList(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPokemon()
    }, [])

    // console.log(pokemonList)

    const pokemonsInPokeCard = pokemonList.map((pokemon) => {
        return (
            <PokeCard key={pokemon.name} pokemonName={pokemon.name} pokemonURL={pokemon.url} />
        )
    })

    return (
        <div>
            <Header title={'Lista de Pokémons'} />
            
            <CardsContainer>
                {pokemonsInPokeCard}
            </CardsContainer>
        </div>
    )
};

export default Home;