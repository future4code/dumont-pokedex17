import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MainContainer } from './styled';

const Header = (props) => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const Button1 = () => {
        switch (props.title) {
            case ('Lista de Pokémons'):
                return (
                    <Link to={'/pokedex'}>
                        <button>Ver minha Pokédex</button>
                    </Link>
                )
            case ('Minha Pokédex'):
                return (
                    <Link to={'/'}>
                        <button>Voltar para Lista</button>
                    </Link>
                )
            case ('Nome do Pokémon'):
                return (
                    <button onClick={goBack}>
                        Voltar
                    </button>
                )
            default:
                break;
        }
    }

    const Button2 = () => {
        switch (props.title) {
            case ('Nome do Pokémon'):
                return (
                    <button>
                        Adicionar ou Remover da Pokédex
                    </button>
                )
            default:
                return (
                    <div>*</div>
                )
        }
    }

    return (
        <MainContainer>
            <Button1 />

            <h1>{props.title}</h1>

            <Button2 />
        </MainContainer>
    )
};

export default Header;