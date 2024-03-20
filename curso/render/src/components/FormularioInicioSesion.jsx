import React, { useState } from 'react'

const FormularioInicioSesion = () => {
const [user, setUser] = useState("")
const [pass, setPass] = useState("")

  return (
    <form action=''>
      <p>usuario:  {user}</p>
      <p>contraseña: {pass}</p>
      <div>
        <label htmlFor="usuario">Usuario</label>
        <input 
          type="text" 
          name="usuario" 
          id="usuario" 
          value={user}
          onChange={(e) => setUser(e.target.value)}
          />
        <label htmlFor="usuario">Contraseña</label>
        <input 
          type="text"  
          name="password" 
          id="password" 
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          />
        <button type='submit'>Iniciar seseion</button>
      </div>
    </form>
  )
}

export default FormularioInicioSesion
