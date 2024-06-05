import React, { useState} from 'react';
function FormLog({ onInicioSesion }) {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (correo.trim() === '' || contraseña.trim() === '') {
        alert('Por favor completa todos los campos');
        setCorreo('');
        setContraseña('');
        return;
    }
    const nuevoCorreo = correo;
    const nuevaContraseña = contraseña;
    console.log("Correo:", nuevoCorreo);
    console.log("Contraseña:", nuevaContraseña);
    const credenciales = { correo, contraseña }; // Crear un objeto con las credenciales
    onInicioSesion(credenciales); // Pasar el objeto a la función onInicioSesion
    
    setCorreo('');
    setContraseña('');
  };
  return (
    <form onSubmit={handleSubmit}>
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
        Contraseña:
        <input className="w-64 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </label>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Iniciar Sesión</button>
    </form>
  );
}
export default FormLog;

