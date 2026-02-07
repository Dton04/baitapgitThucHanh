import React from 'react'
import SearchFilter from '../components/SearchFilter'
import ProductCard from '../components/ProductCard'
import '../styles/product.css'

export default function ProductList() {
  return (
    <div className="product-list-page container">
      <header className="products-header">
        <h2 id="products-heading">Products</h2>
        <p className="subtitle">Browse our available items.</p>
      </header>

      <div className="products-grid-layout">
        <aside className="aside-col">
          <SearchFilter />
        </aside>

        <section className="products-col" aria-label="Product results">
          <div className="products-grid">
            <ProductCard title="Classic Shirt" price="$29.99" />
            <ProductCard title="Leather Belt" price="$19.00" />
            <ProductCard title="Sneakers" price="$69.50" />
            <ProductCard title="Sunglasses" price="$49.00" />
          </div>
        </section>
      </div>
    </div>
  )
}
