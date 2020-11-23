import React from 'react';
import { MainContainer } from './styled';

function Header(props) {
    return(
        <MainContainer>
            <button>a</button>
            <h1>{props.title}</h1>
            <button>a</button>
        </MainContainer>
    );
}

export default Header;