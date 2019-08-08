import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeers from './pages/RandomBeers'
import AddBeer from './pages/AddBeer'
import BeerDetails from './pages/BeerDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/beers" exact component={Beers}/>
    <Route path="/random-beer" exact component={RandomBeers}/>
    <Route path="/add-beer" exact component={AddBeer}/>
    <Route path="/beers/:id" exact component={BeerDetails}/>
    <Route component={NotFound}/>
    </Switch>
    </Router>
  );
}

export default App;
