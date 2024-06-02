import React, { useState,useEffect } from 'react';
import { useCart } from "./useShoppingCart";
import { Route, Routes, Link } from 'react-router-dom';



function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  
export const Ventas=({ products, setProducts}) =>{

  const { info, cart, addToCart, removeFromCart,
    decreaseQuantity, increaseQuantity, clearCart,
     isEmpty, cartTotal} = useCart()

    const [currentDate, setCurrentDate] = useState(getDate());
    return(
    
     <div className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 ">
        <div className="lg:col-span-6 ">
         <header className="p-4">
            <div>
                <h1 className="text-2xl text-black-500">Productos a la Venta</h1>
                <p>{currentDate}</p>
            </div>        
            <nav className="text-blue-700 flex items-center gap-4 mb-20">
                <Link to="/Todos" className="relative before:w-1/2 before:h-1 before:absolute before:bg-blue-500 py-2 pr-4 border-blue-700">Todo</Link>
                <Link to="#" className="border-b py-2 pr-4">Pasteleria</Link>
                <Link to="#" className="border-b py-2 pr-4">Panaderia</Link>
            </nav>
            <div className="carrito">
                            <img className="img justify-end w-10" src="../imagenes/carrito-de-compras.png" alt="imagen carrito" />
                            <div id="carrito" className="bg-white p-3 right-5">
                                {isEmpty ? (
                                    <p className="text-center text-black">El carrito esta vacio</p>
                                ) : (
                                <>
                                    <table className="text-black table table-fixed p-2">
                                        <thead>
                                            <tr>
                                                <th className=" w-1/5">Imagen</th>
                                                <th className=" w-1/5">Producto</th>
                                                <th className=" w-1/5">Precio</th>
                                                <th className=" w-1/5">Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map( contenido => (
                                                <tr key={contenido.id}>
                                                    <td>
                                                        <img 
                                                            className="img h-20 w-1/4 text-center" 
                                                            src={`../images/${contenido.img}`}
                                                            alt={contenido.title} 
                                                        />
                                                    </td>
                                                    <td className=" w-1/5 text-justify">{contenido.title}</td>
                                                    <td className=" w-1/5 text-center">
                                                        ${contenido.price}
                                                    </td>
                                                    <td className=" w-1/5 text-center">
                                                        <button
                                                            type="button"
                                                            className="font-bold text-gray-900 px-2 text-2xl"
                                                            onClick={() => decreaseQuantity(contenido.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {contenido.quantity}
                                                        <button
                                                            type="button"
                                                            className="font-bold text-gray-900 px-2 text-2xl"
                                                            onClick={() => increaseQuantity(contenido.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="font-bold text-white px-2 border-2 bg-red-500 rounded-md "
                                                            type="button"
                                                            onClick={() => removeFromCart(contenido.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <p className="text-end px-20 py-2 mt-5 font-semibold bg-indigo-200/20 text-xl">Total pagar: ${cartTotal}</p>
                                </>
                                )}
                                <div className='flex flex-col-2 gap-10 m-2'>
                                    <div className='px-10 place-self-center '>
                                        <button 
                                    className=" text-gray-800 w-60
                                    font-semibold text-center my-5 border-2 px-3 h-10 rounded-md
                                     border-black bg-white"
                                    onClick={clearCart}
                                >Vaciar Carrito</button>
                                        </div>
                                        <Link to="/Factura" className='px-10 place-self-center  text-gray-800 w-60
                                    font-semibold text-center my-5 border-2  rounded-md
                                     border-black bg-white h-10'> Procesar compra</Link>
                                </div>

                                
                            </div>
                        </div>

            

         </header>
         <div className="md:basis-1/5 flex flex-wrap gap-4 ">
          {/*Tarjeta */}
          
         {  Array.isArray(products) && products.map(product => (
          <div className=" bg-blue-100 p-4 rounded-xl flex flex-col items-center 
          h-100 w-60 mt-20 text-center">
           <img src={`../imagenes/${product.img}`} alt={product.name} 
           className=" h-40 w-40 space-y-4 rounded-md -mt-14 shadow-2xl rounded-full" />
           <p className="text-xl"> {product.name}</p>
           <p className="text-gray-500"> {product.desc}</p>
           <span className="text-gray-400"> $ {product.price}</span>
           <p> Disponibles: {product.stock}</p>
           <button 
                    type="button"
                    className=" text-gray-800 w-50
                    font-semibold text-center m-5 border-2 px-3 py-1 rounded-md
                     border-black bg-white"
                    onClick={() => addToCart(product)}
                >Agregar al Carrito</button>
           </div>
          ))}
          
         </div>
        </div>

     </div>
    
    );
  };
  
  export default Ventas;
  