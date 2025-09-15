import React, { useState } from 'react'
import './Multiplicar.scss'

function Multiplicar() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularMultiplicacao = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    if (!isNaN(n1) && !isNaN(n2)) {
      setResultado(n1 * n2)
    } else {
      setResultado('Entrada inválida')
    }
  }

  return (
    <div className="multiplicar">
      <h2>Multiplicar</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
        className="input-num"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
        className="input-num"
      />
      <button onClick={calcularMultiplicacao} className="btn-calcular">Multiplicar</button>
      {resultado !== null && <p className="resultado">Resultado: {resultado}</p>}
    </div>
  )
}

export default Multiplicar
