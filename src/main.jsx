import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './pages/Inicio'
import Dividir from './pages/Dividir'
import Multiplicar from './pages/Multiplicar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
    <Dividir />
    <Multiplicar />
  </StrictMode>,
)
