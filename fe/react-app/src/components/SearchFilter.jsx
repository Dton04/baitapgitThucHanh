import React from 'react'
import '../styles/searchfilter.css'

export default function SearchFilter({
  searchQuery = '',
  onSearchChange = () => {},
  selectedCategory = '',
  onCategoryChange = () => {},
  selectedPriceRange = '',
  onPriceChange = () => {},
  onClearFilters = () => {},
}) {
  const hasActiveFilters = searchQuery || selectedCategory || selectedPriceRange

  return (
    <aside className="search-filter" aria-label="Search and filter">
      <div className="search-box">
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>

      <div className="filters">
        <div className="filters-header">
          <h4>Filters</h4>
          {hasActiveFilters && (
            <button className="clear-btn" onClick={onClearFilters}>Clear</button>
          )}
        </div>

        <div className="filter-group">
          <label>Category</label>
          <ul>
            <li>
              <button
                className={`filter-link ${selectedCategory === 'Clothing' ? 'active' : ''}`}
                onClick={() => onCategoryChange('Clothing')}
              >
                Clothing
              </button>
            </li>
            <li>
              <button
                className={`filter-link ${selectedCategory === 'Accessories' ? 'active' : ''}`}
                onClick={() => onCategoryChange('Accessories')}
              >
                Accessories
              </button>
            </li>
          </ul>
        </div>

        <div className="filter-group">
          <label>Price</label>
          <ul>
            <li>
              <button
                className={`filter-link ${selectedPriceRange === 'under-25' ? 'active' : ''}`}
                onClick={() => onPriceChange('under-25')}
              >
                Under $25
              </button>
            </li>
            <li>
              <button
                className={`filter-link ${selectedPriceRange === '25-50' ? 'active' : ''}`}
                onClick={() => onPriceChange('25-50')}
              >
                $25 to $50
              </button>
            </li>
            <li>
              <button
                className={`filter-link ${selectedPriceRange === 'over-50' ? 'active' : ''}`}
                onClick={() => onPriceChange('over-50')}
              >
                Over $50
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
