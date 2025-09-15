import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Multiplicar from './pages/Multiplicar'
import Dividir from './pages/Dividir'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/multiplicar" element={<Multiplicar />} />
          <Route path="/dividir" element={<Dividir />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
