import React, {useState} from 'react'

const FormularioInicioSesion = () => {
  return (
    <form action=''>
      <p>usuario:</p>
      <p>contraseña:</p>
      <label htmlFor="usuario">Usuario</label>
      <input type="text" name="usuario" id="usuario" />
    </form>
  )
}

export default FormularioInicioSesion
