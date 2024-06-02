import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useCart } from "./useShoppingCart";
import Inventario from './inventario';
import Ventas from './ventas';
import { obtenerProductos } from "../complementos/API";

const inicioProductos =  await obtenerProductos();



  
const Menu = () => {

  


     const [products, setProductos]= useState(inicioProductos);
 
  return(
  <header>
  <div>
  <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/imagenes/PDiana.png" className="h-8" alt="PDiana"></img>
      <span className="self-center text-2xl font-semibold whitespace-nowrap md:text-blue-700 ">Pasteleria</span>
  </a>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8
     rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/inventario" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 
        md:dark:text-blue-500" aria-current="page">Inventario</Link>
      </li>
      <li>
        <Link to="/ventas" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 
        md:dark:text-blue-500" aria-current="page">Ventas</Link>
      </li>
      <li>
        <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
        md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
        dark:border-gray-700">Nosotros</a>
      </li>
      <li>
        <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
        md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
        dark:border-gray-700">Contactenos</a>
      </li>
    </ul>
  </div>
  </div>
</nav>


<div className=" block mt-20">
        <Routes>
          <Route path="/inventario" element={<Inventario products={products} setProducts={setProductos} />} />
          <Route path="/ventas" element={<Ventas products={products} setProducts={setProductos} />} />
          <Route path="/contact" element={<Inventario />} />
        </Routes>
      </div>
</div>
</header>
  );
};
export default Menu;