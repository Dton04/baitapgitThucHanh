import React, { useState, useMemo } from 'react'
import SearchFilter from '../components/SearchFilter'
import ProductCard from '../components/ProductCard'
import '../styles/product.css'

const MOCK_PRODUCTS = [
  { id: 1, title: 'Classic Shirt', price: 29.99, category: 'Clothing' },
  { id: 2, title: 'Leather Belt', price: 19.00, category: 'Accessories' },
  { id: 3, title: 'Sneakers', price: 69.50, category: 'Clothing' },
  { id: 4, title: 'Sunglasses', price: 49.00, category: 'Accessories' },
  { id: 5, title: 'Cotton Hoodie', price: 39.99, category: 'Clothing' },
  { id: 6, title: 'Watch', price: 89.99, category: 'Accessories' },
]

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedPriceRange, setSelectedPriceRange] = useState('')

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesPrice = !selectedPriceRange || getPriceMatch(product.price, selectedPriceRange)
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchQuery, selectedCategory, selectedPriceRange])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category)
  }

  const handlePriceFilter = (range) => {
    setSelectedPriceRange(selectedPriceRange === range ? '' : range)
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setSelectedPriceRange('')
  }

  return (
    <div className="product-list-page container">
      <header className="products-header">
        <h2 id="products-heading">Products</h2>
        <p className="subtitle">Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</p>
      </header>

      <div className="products-grid-layout">
        <aside className="aside-col">
          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryFilter}
            selectedPriceRange={selectedPriceRange}
            onPriceChange={handlePriceFilter}
            onClearFilters={handleClearFilters}
          />
        </aside>

        <section className="products-col" aria-label="Product results">
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={`$${product.price.toFixed(2)}`}
                />
              ))
            ) : (
              <p className="no-results">No products found. Try adjusting your filters.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

function getPriceMatch(productPrice, priceRange) {
  switch (priceRange) {
    case 'under-25':
      return productPrice < 25
    case '25-50':
      return productPrice >= 25 && productPrice <= 50
    case 'over-50':
      return productPrice > 50
    default:
      return true
  }
}
