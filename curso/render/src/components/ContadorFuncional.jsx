import { useState } from "react"
import React from 'react'

const ContadorFuncional = () => {
    const [cuenta, setCuenta] = useState(0)

    const mas = (cantidad) => {
        setCuenta(cuenta + cantidad)
    }

    const menos = (cantidad) => {
        setCuenta(cuenta - cantidad)
    }
  return (
    <div>
      <h1>Contador</h1>
      <button onClick={() => mas(2)}>Incrementar</button>
      <button onClick={() => menos(1)}>Disminuir</button>
    </div>
  )
}

export default ContadorFuncional
