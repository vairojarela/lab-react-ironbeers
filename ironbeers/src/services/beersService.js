import axios from 'axios';

class BeersService {
  constructor(){
    this.beers = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers/'
    })  
  }

  getAllBeers(){
    return this.beers.get()
    .then(response => response)
  }

  getOneBeer(id){
    return this.beers.get(`${id}`)
    .then(response => response)
  }

  getRandomBeer(){
    return this.beers.get(`random`)
    .then(response => response)
  }
}

const beersService = new BeersService();

export default beersService;