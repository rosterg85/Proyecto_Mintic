//import logo from './logo.svg';
import React, { useState } from 'react';
import FormRegistro from './proyectofinal/Registro';
import FormLog from './proyectofinal/Login';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarFormRegistro, setMostrarFormRegistro] = useState(false);
  const handleRegistro = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
    alert('¡Registro exitoso!');
  };
  const handleInicioSesion = (credenciales) => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.correo === credenciales.correo && usuario.contraseña === credenciales.contraseña
    );
    if (usuarioEncontrado) {
      alert('¡Inicio de sesión exitoso!');
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };
  return (
    <div>
      <button onClick={() => setMostrarFormRegistro(true)}>Registrarse</button>
      <button onClick={() => setMostrarFormRegistro(false)}>Iniciar Sesión</button>
      {mostrarFormRegistro ? (
        <FormRegistro onRegistro={handleRegistro} />
      ) : (
        <FormLog onInicioSesion={handleInicioSesion} />
      )}
    </div>
  );
}

export default App;