import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/index';
import PokeCard from '../../components/PokemonCard';
import { CardsContainer } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';

const Home = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getPokemons()
    }, [])

    const pokemonsInPokeCard = states.pokemonList.map((pokemon) => {
        return (
            <PokeCard
                key={pokemon.name}
                pokemonName={pokemon.name}
                pokemonURL={pokemon.url}
                addToPokedex = {() => addToPokedex(pokemon)}
                setPokemon = {() => setPokemon(pokemon.name)}
            />
        )
    })

    const setPokemon = (pokemon) => {
        setters.setPokemonToDetail(pokemon)
    }

    const addToPokedex = (newPokemon) => {
        let newPokedex = [...states.pokedex]
        newPokedex.push(newPokemon)
        setters.setPokedex(newPokedex);
        alert(`${newPokemon.name} foi adicionado no Pokedex`)
    }

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