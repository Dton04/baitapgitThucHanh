import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import './styles/global.css'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <section aria-labelledby="home-heading">
          <Home />
        </section>

        <section aria-labelledby="products-heading">
          <ProductList />
        </section>
      </main>
      <Footer />
    </div>
  )
}
