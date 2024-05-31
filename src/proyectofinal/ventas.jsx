import React, { useState,useEffect } from 'react';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  
export const Ventas=({ products, setProducts}) =>{
    const [currentDate, setCurrentDate] = useState(getDate());
    return(
    
     <div className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 ">
        <div className="lg:col-span-6 ">
         <header className="p-4">
            <div>
                <h1 className="text-2xl text-blue 500">Productos a la Venta</h1>
                <p>{currentDate}</p>
            </div>
            <nav className="text-blue-700 flex items-center gap-4 ">
                <a href="#" className="border-b py-2 pr-4 border-blue-700">Tortas</a>
                <a href="#" className="border-b py-2 pr-4">Panes</a>
                <a href="#" className="border-b py-2 pr-4">otros</a>
            </nav>

         </header>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>

     </div>
    
    );
  };
  
  export default Ventas;
  