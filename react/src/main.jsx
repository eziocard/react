import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TarjetaPersona from './components/TarjetaPersona.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TarjetaPersona/>
  </StrictMode>,
)
