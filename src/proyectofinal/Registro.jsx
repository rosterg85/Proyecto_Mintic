import React, { useState } from 'react';

function FormRegistro({ onRegistro }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === '' || correo.trim() === '' || celular.trim() === '' || contraseña.trim() === '') {
        alert('Por favor completa todos los campos');
        setNombre('');
        setCorreo('');
        setCelular('');
        setContraseña('');
        return;
    }
    const nuevoNombre = nombre;
    const nuevoCorreo = correo;
    const nuevoCelular = celular;
    const nuevaContraseña = contraseña;
    console.log("Nombres y Apellidos:", nuevoNombre);
    console.log("Correo:", nuevoCorreo);
    console.log("Celular:", nuevoCelular);
    console.log("Contraseña:", nuevaContraseña);
    const nuevoUsuario = { nombre, correo, celular, contraseña }; // Crear un objeto con los datos del usuario
    onRegistro(nuevoUsuario);
    setNombre('');
    setCorreo('');
    setCelular('');
    setContraseña('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombres y Apellidos:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      <br />
      <label>
        Número Celular:
        <input
          type="tel"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
}
export default FormRegistro;
