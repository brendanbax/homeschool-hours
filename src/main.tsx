import './index.css'
import React from 'react'
import { Container, createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root') as Container).render(<App />)
