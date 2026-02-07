import React from 'react'
import '../styles/product.css'

export default function ProductCard({ title = 'Product title', price = '$0.00', imageAlt = 'Product image' }) {
  return (
    <article className="product-card">
      <div className="product-image" aria-hidden="true">
        <span className="image-placeholder">Image</span>
      </div>
      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
      </div>
    </article>
  )
}
