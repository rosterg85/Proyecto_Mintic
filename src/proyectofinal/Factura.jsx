import React from 'react';
 
export default function Factura({cart, cartTotal}) {
    const npedido= new Date().getTime().toString();

    return (
        <div className='lg:pl-28 flex flex-col items-start 4/5 bg-white min-h-80'>
            <div className='place-self-end w-full'>
            <p className="text-end px-20 py-10  font-semibold bg-indigo-200/20 text-xl">Pedido número: {npedido}</p>
            </div>
            <div className=" overflow-auto object-center max-h-96 w-5/6 flex-grow">
            <table className="relative text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr className="border-y-4">
                    <th className=" w-1/2">Imagen</th>
                    <th className=" w-1/2">Producto</th>
                    <th className=" w-1/2">Precio</th>
                    <th className=" w-1/2">Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {cart.map( contenido => (
                <tr key={contenido.id}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                    <td className=" w-1/4 text-center ">
                        <img className="img h-20 w-1/4 text-center" 
                        src={`../imagenes/${contenido.img}`} alt={contenido.name} />
                    </td>
                    <td className=" w-1/4 text-justify">{contenido.name}</td>
                    <td className=" w-1/4 text-center">${contenido.price} </td>
                    <td className=" w-1/4 text-center"> {contenido.quantity}</td>
                </tr>
            ))}
            </tbody>
            </table>
            </div>
            <div className='place-self-end w-full'>
            <p className="text-end px-20 py-2 mt-5 font-semibold bg-indigo-200/20 text-xl">Total pagar: ${cartTotal}</p>
            </div>
            
        </div>

    )
}
