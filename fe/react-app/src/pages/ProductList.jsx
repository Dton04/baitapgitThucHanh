import React, { useState, useMemo, useEffect } from 'react'
import SearchFilter from '../components/SearchFilter'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/api'
import '../styles/product.css'

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedPriceRange, setSelectedPriceRange] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch products from API when filters change
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      setError(null)
      
      const { data, error: apiError } = await fetchProducts({
        search: searchQuery,
        category: selectedCategory,
        priceRange: selectedPriceRange,
      })

      if (apiError) {
        setError(apiError)
        setProducts([])
      } else {
        setProducts(data || [])
      }
      
      setLoading(false)
    }

    loadProducts()
  }, [searchQuery, selectedCategory, selectedPriceRange])

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesPrice = !selectedPriceRange || getPriceMatch(product.price, selectedPriceRange)
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [products, searchQuery, selectedCategory, selectedPriceRange])

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
        <p className="subtitle">
          {loading ? 'Loading...' : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`}
        </p>
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
          {error && (
            <div className="error-message">
              <p>Error: {error}</p>
              <button onClick={() => window.location.reload()}>Retry</button>
            </div>
          )}

          {loading && (
            <div className="loading-message">
              <p>Loading products...</p>
            </div>
          )}

          {!loading && !error && (
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
          )}
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
