import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import beersService from '../services/beersService'
import Header from '../components/Header';

export default class Beers extends Component {
    
  state = {
      beers: []
    }

    componentDidMount() {
      beersService.getAllBeers()
        .then((response)=> {
          const beersFromAPI = response.data
          this.setState({
            beers: beersFromAPI,
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }

  render() {
    
    return (
      <>
      <Header/>
      <h1>Beers!</h1>
        <center>
        <section className="beers-list">
        {this.state.beers.length > 0 ? this.state.beers.map((beer, _id) => {
          return (
          <article key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
          <img src={beer.image_url} alt={beer.name}/>
          </Link>
          <div className="beers-info">
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Created by: {beer.contributed_by}</p>
          </div>
          </article>
          )
        }) : <p>Loading...</p>}
        </section>
        </center>
        </>
    )
  }
}

