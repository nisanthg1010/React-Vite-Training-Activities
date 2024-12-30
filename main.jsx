import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nisanth from './Nisanth.jsx'
import Count from './components/Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nisanth />
    <Count/>
  </StrictMode>,
)
