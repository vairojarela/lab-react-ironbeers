import React, { Component } from 'react';
import beersService from '../services/beersService';
import Header from '../components/Header';

export default class RandomBeers extends Component {

  state ={
    beer : null
  }
  componentDidMount() {
    beersService.getRandomBeer()
      .then((response)=> {
        const randomBeerFromAPI = response.data
        console.log(randomBeerFromAPI)
        this.setState({
          beer: randomBeerFromAPI,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  }

  render() {
    const beer = this.state.beer
    return (
      <>
      <Header/>
      <h3>Random Details</h3>
      <button onClick={this.goToPreviousPage}>Back</button>
      <section className="beer-detail">
      {this.state.beer !== null ?
      <article className="" key={beer.id}>
          <img className="beer-img" src={beer.image_url} alt={beer.name}/>
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
      </article>
      : <p>Loading...</p>
      }
      </section>
      </>
    )
  }
}
