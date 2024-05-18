import React, { useState } from 'react';

const factura = [  ];
const Ventas = ({ products, setProducts}) => {
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [newPrice, setNewPrice] = useState('');
    const [Adicionar, setAdicionar] = useState('');

    const handleVenta = (productId) => {
        setSelectedProductId(productId);
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
          setNewPrice(selectedProduct.price.toString());
          setAdicionar(selectedProduct.stock.toString());
        }
      };

    return(
        <div className=" mt-9">
            <table class=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="m-1 text-xl">Productos</caption>
                <thead   class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr class="border-y-4">
                        <th scope="col" class="p-4">Cantidad</th>
                        <th scope="col" class="p-4">Nombre</th>
                        <th scope="col" class="p-4">Existencias</th>
                        <th scope="col" class="p-4">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                    <tr key={product.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="p-2 ">
                            <input class="border border-gray-800" type="number" name={product.id}  min="0"   
                            onChange={() => handleVenta(product.id)}/>
                        </td>
                        <td class="px-6 py-4">{product.name}</td>
                        <td class="px-6 py-4">{product.stock}</td>
                        <td class="px-6 py-4">${product.price.toFixed(1)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div>
        <button  class="m-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={ ""}>Adicionar Productos</button>
        <button  class="m-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={ ""}>Retirar Producto</button>
         </div>
        </div>

    );

}
export default Ventas;