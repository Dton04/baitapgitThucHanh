import React from 'react'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="brand">
          <a href="#" aria-label="E-commerce Home" className="logo">MiniShop</a>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
