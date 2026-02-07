import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p>© 2026 MiniShop. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
