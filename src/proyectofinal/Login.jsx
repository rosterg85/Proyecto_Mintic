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
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
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
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}
export default FormLog;

