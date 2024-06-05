//import logo from './logo.svg';
import React, { useState } from 'react';
import FormRegistro from './proyectofinal/Registro';
import FormLog from './proyectofinal/Login';
import Menu from './proyectofinal/menu';
import './proyectofinal/main.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarFormRegistro, setMostrarFormRegistro] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  const handleRegistro = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
    alert('¡Registro exitoso!');
  };
  const handleInicioSesion = (credenciales) => {
    const usuarios = [{nombre:'123', correo:"123@123.com", celular: "123", contraseña: "123"} ];
    
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.correo === credenciales.correo && usuario.contraseña === credenciales.contraseña
    );
    if (usuarioEncontrado) {
      alert('¡Inicio de sesión exitoso!');
      setIsLoggedIn(true);
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };
  
  
  
  return (
    <div>
      {isLoggedIn ? ( 
        <Menu />
      ) : (
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setMostrarFormRegistro(true)}>Registrarse</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setMostrarFormRegistro(false)}>Iniciar Sesión</button>
        {mostrarFormRegistro ? (
          <FormRegistro onRegistro={handleRegistro} />
        ) : (
          <FormLog onInicioSesion={handleInicioSesion} />
        )}
      </div>
      )}
    </div>
  );
}

export default App;
