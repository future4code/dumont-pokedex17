import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MainContainer, Button } from './styled';

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
                        <Button>Ver minha Pokédex</Button>
                    </Link>
                )
            case ('Minha Pokédex'):
                return (
                    <Link to={'/'}>
                        <Button>Voltar para Lista</Button>
                    </Link>
                )
            case ('Nome do Pokémon'):
                return (
                    <Button onClick={goBack}>
                        Voltar
                    </Button>
                )
            default:
                break;
        }
    }

    const Button2 = () => {
        switch (props.title) {
            case ('Nome do Pokémon'):
                return (
                    <Button>
                        Adicionar ou Remover da Pokédex
                    </Button>
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