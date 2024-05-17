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
        <input className="w-64 block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input className="w-64 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      <br />
      <label>
        Número Celular:
        <input className="w-64 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="tel"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input className="w-64 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </label>
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Registrarse</button>
    </form>
  );
}
export default FormRegistro;
