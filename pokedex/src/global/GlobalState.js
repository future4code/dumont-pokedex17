import React, { useState } from 'react';
import axios from 'axios';
import GlobalStateContext from './GlobalStateContext';

const GlobalState = (props) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedex, setPokedex] = useState([])

    const getPokemons = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            .then((response) => {
                setPokemonList(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const states = { pokemonList, pokedex };
    const setters = { setPokemonList, setPokedex }
    const requests = { getPokemons };

    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;