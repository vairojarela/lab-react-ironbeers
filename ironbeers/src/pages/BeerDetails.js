import React, { Component } from 'react'
import beerService from '../services/beersService';

export default class BeerDetails extends Component {

  state={
    beer: null
  }

  componentDidMount() {
    const {id} = this.props.match.params
    beerService.getOneBeer(id)
      .then((response)=> {
        console.log(response)
        const beerFromAPI = response.data
        this.setState({
          beer: beerFromAPI,
          id: id
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
    const beer = this.state.beer;
    return (
      <>
      <h3>Beer Details</h3>
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
