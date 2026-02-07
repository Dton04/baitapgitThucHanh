import React from 'react'
import '../styles/searchfilter.css'

export default function SearchFilter() {
  return (
    <aside className="search-filter" aria-label="Search and filter">
      <div className="search-box">
        <label htmlFor="search-input">Search</label>
        <input id="search-input" type="search" placeholder="Search products..." />
      </div>

      <div className="filters">
        <h4>Filters</h4>
        <div className="filter-group">
          <label>Category</label>
          <ul>
            <li><a href="#">All</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        <div className="filter-group">
          <label>Price</label>
          <ul>
            <li><a href="#">Under $25</a></li>
            <li><a href="#">$25 to $50</a></li>
            <li><a href="#">Over $50</a></li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
