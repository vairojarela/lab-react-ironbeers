import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/beers">Beers</Link></li>
        <li><Link to="/random-beer">Random Beer</Link></li>
        <li><Link to="/add-beer">Add Beer</Link></li>
      </ul>
    </nav>
  )
}
