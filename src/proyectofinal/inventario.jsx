import React, { useState } from 'react';
import {editarProducto, eliminarProducto,nuevoProducto, obtenerProductos} from "../complementos/API";



const Inventario = ({ products, setProducts}) => {
  console.log(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [Adicionar, setAdicionar] = useState('');
  const [newName, setNewName] = useState('');
  const [newExistencia, setNewExistencia] = useState('');
  const [newTipo, setNewTipo] = useState('');
  const [newPrecio, setNewPrecio] = useState('');

  const handleRowSelect = (product) => {
    setSelectedProduct(product);
    setSelectedProductId(product.id);  
    setNewPrice(product.price);
    setAdicionar(product.stock);
    
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setAdicionar(e.target.value);
  };
  const manejoCambioNombre =(e) =>{
    setNewName(e.target.value);
  } ;
  const manejoCambioExistencia =(e) =>{
    setNewExistencia(e.target.value);
  } ;
  const manejoCambioTipo =(e) =>{
    setNewTipo(e.target.value);
  } ;
  const manejoCambioPrecio =(e) =>{
    setNewPrecio(e.target.value);
  } ;

 
  const handleEditar = () => {
    // Llamar a editarProducto con el producto actualizado
    selectedProduct.price=newPrice;
    selectedProduct.stock=parseInt(Adicionar);
    
    editarProducto(selectedProduct)
      .then(() => {
        console.log('Producto editado exitosamente');
                
        const updatedProducts = products.map(product =>
          product.id === selectedProduct.id ? selectedProduct : product
        );
        setProducts(updatedProducts);
      })
      
      .catch(error => {
        console.error('Error al editar el producto:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
      
      
  };

  const handleEliminar = () => {
    eliminarProducto(selectedProductId)
      .then(() => {
        console.log('Producto eliminado exitosamente');
        
        let newProducts = products.filter(product => product.id !== selectedProductId);
            setProducts(newProducts);
            setSelectedProductId(null);

      })
      .catch(error => {
        console.error('Error al eliminar el producto:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
        
      });
  }

const handleAddProduct = () => {
        if (!newName || !newExistencia || !newTipo || !newPrecio) {
          alert('Por favor completa todos los campos.');
          return;
        }
    
        const nProducto = {
          id: products.length + 1,
          name: newName,
          stock: parseInt(newExistencia),
          empaque: newTipo, // Puedes cambiar esto según tus necesidades
          price: parseFloat(newPrecio),
        };

        nuevoProducto(nProducto)
        .then(() => {
          console.log('Producto creado exitosamente');
          alert("No olvide copiar el archivo en la carpeta imagen sin cambiar el nombre");
          // mostrar mensaje de éxito
        })
        .catch(error => {
          console.error('Error al crear el producto:', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        });
        
    setProducts([...products, nProducto]);
    setNewName('');
    setNewExistencia('');
    setNewTipo('');
    setNewPrecio('');
  };

  return (
    <div className=" mt-9">

      <h2>Bienvenido, A la pagina de inventario </h2>
      
      
      <div className="flex relative overflow-auto shadow-md sm:rounded-lg ">
      <div className=" overflow-auto max-h-96">
      <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto overflow-scroll min-h-full w-full ">
        <caption className="m-1 text-xl md:text-blue-700">Productos</caption>
        <thead   className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="border-y-4">
            <th scope="col" className="p-4">Seleccionar</th>
            <th scope="col" className="p-4">Nombre</th>
            <th scope="col" className="p-4">Existencias</th>
            <th scope="col" className="p-4">Tipo de Empaque</th>
            <th scope="col" className="p-4">Precio</th>
            
          </tr>
        </thead>
        <tbody>
          {  Array.isArray(products) && products.map(product => (
            <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 flex items-center px-6 py-4 space-x-4">
                <input classname="h-4 w-4" type="radio" name="selectedProduct" value={product.id} checked={selectedProductId === product.id}
                  onChange={() => handleRowSelect(product)}
                />
                <img src={`../imagenes/${product.img}`} alt={product.name} className="object-fill  box-content h-12 w-12 rounded-md " />
              </td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4">{product.empaque}</td>
              <td className="px-6 py-4">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="m-4 flex-wrap bg-gray-50  border-gray-300  text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 
      block py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
      dark:focus:border-blue-500 ">       
       <div className="border-4 mt-10">
       <label className="m-2" htmlFor="newPrice">Nuevo Precio: </label>
        <input className="border border-gray-800" type="number" id="newPrice" min="0" value={newPrice} onChange={handlePriceChange} />
        <label className="m-2" htmlFor="Adicionar">Cantidad de productos: </label>
        <input className=" border border-gray-800" type="number" id="Adicionar" min="0" value={Adicionar} onChange={handleStockChange} />
        <button  className="m-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none 
        focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 
        dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={handleEditar}>Actualizar Producto</button>
        <button  className="m-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 
         dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={handleEliminar}>Borrar Producto</button>
         </div>
         <div className="font-sans text-black-500 border-4 mt-10" >
      <h3 className="m-8 text-2xl" >Agregar nuevo Producto</h3>
      <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="border-y-4">
            <th scope="col" className="p-4">Nombre</th>
            <th scope="col" className="p-4">Existencias</th>
            <th scope="col" className="p-4">Tipo de Empaque</th>
            <th scope="col" className="p-4">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4"> <input className="border border-gray-800"  type="text" id="newName" name="newName"  
             value={newName} onChange={manejoCambioNombre} /> </td>
            <td className="px-6 py-4"> <input className="border border-gray-800"  type="text" id="newExistencia" 
            name="newExistencia"  value={newExistencia} onChange={manejoCambioExistencia}  /> </td>
            <td className="px-6 py-4"> <input className="border border-gray-800"  type="text" id="newTipo" 
            name="newTipo" value={newTipo} onChange={manejoCambioTipo} /> </td>
            <td className="px-6 py-4"> <input className="border border-gray-800"  type="text" id="newPrecio"
             name="newPrecio" value={newPrecio}  onChange={manejoCambioPrecio}/> </td>
             </tr>
        </tbody>
      </table>
      <button  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 
      focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
      text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white 
      dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={handleAddProduct}>Ingresar Producto</button>

      </div>
      </div>
      
      </div>
      
    </div>
    
  );
};

export default Inventario;