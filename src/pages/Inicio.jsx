import React from 'react'
import { Link } from 'react-router-dom'
import './Inicio.scss'

function Inicio() {
  return (
    <div className="inicio">
      <h1>Inicio</h1>
      <p>Nome completo: </p>
      <p>Turma: </p>
      <nav>
        <Link to="/multiplicar">Multiplicar</Link>
        <Link to="/dividir">Dividir</Link>
      </nav>
    </div>
  )
}

export default Inicio
