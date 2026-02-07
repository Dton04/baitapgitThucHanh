import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

const rootEl = document.getElementById('root') || document.createElement('div')
rootEl.id = 'root'
document.body.appendChild(rootEl)

createRoot(rootEl).render(<App />)
