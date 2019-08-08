import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section>
        <Link to="/beers">
        <article>
        <h1>All Beers</h1>
        </article>
        </Link>
        <Link to="/random-beer">
        <article>
        <h1>Random Beer</h1>
        </article>
        </Link>
        <Link to="/add-beer">
        <article>
        <h1>Add Beer</h1>
        </article>
        </Link>
      </section>
    </div>
  )
}
