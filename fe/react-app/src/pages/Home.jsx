import React from 'react'
import '../styles/global.css'

export default function Home() {
  return (
    <div className="home-page container">
      <header className="hero" role="banner">
        <h1 id="home-heading">Welcome to MiniShop</h1>
        <p className="lead">Discover curated products from our small catalog.</p>
      </header>

      <section className="features">
        <article className="feature">
          <h2>Easy shopping</h2>
          <p>Simple, focused product selection.</p>
        </article>

        <article className="feature">
          <h2>Secure checkout</h2>
          <p>Basic checkout flow ready to be wired up.</p>
        </article>
      </section>
    </div>
  )
}
