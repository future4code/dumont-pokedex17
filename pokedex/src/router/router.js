import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/index';
import PokedexPage from '../pages/pokedex/index';
import DetailsPage from '../pages/details/index';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/pokedex'>
                    <PokedexPage />
                </Route>

                <Route exact path='/details'>
                    <DetailsPage />
                </Route>
            </Switch>
        </BrowserRouter >
    )
}

export default Router;