import React, { useState,useEffect } from 'react';
import {editarProducto, eliminarProducto,nuevoProducto} from "../complementos/API";



const Inventario = ({ products, setProducts}) => {
  console.log(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [Adicionar, setAdicionar] = useState('');
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newExistencia, setNewExistencia] = useState('');
  const [newTipo, setNewTipo] = useState('');
  const [newPrecio, setNewPrecio] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [imgFile, setImgFile] = useState(null);

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
  const manejoCambioCategoria =(e) =>{
    setNewCategory(e.target.value);
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
  const manejoCambioDesc =(e) =>{
    setNewDesc(e.target.value);
  } ;
  
  let nuevoid = new Date().getTime().toString();
  const [nProducto, setnProducto] = useState({
    id: nuevoid,
    name: '',
    category: '',
    empaque: '',
    price: 0,
    stock: 0,
    img: '',
    desc: ''
  });

  useEffect(() => {
    setnProducto({
      id: nuevoid,
      name: newName,
      category: newCategory,
      empaque: newTipo,
      price: parseFloat(newPrecio),
      stock: parseInt(newExistencia),
      img: imgFile ? imgFile.name : '',
      desc: newDesc
    });
  }, [nuevoid,newName, newCategory, newTipo, newPrecio, newExistencia, newDesc, imgFile]);
 
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
        if (!newName || !newCategory  || !newTipo || !newPrecio|| !newExistencia ) {
          alert('Por favor completa todos los campos.');
          return;
        }
         nuevoProducto(nProducto)
        .then(() => {
          console.log('Producto creado exitosamente');
          alert("No olvide copiar el archivo en la carpeta imagen sin cambiar el nombre");
          setProducts([...products, nProducto]);
        setNewName('');
        setNewExistencia('');
        setNewTipo('');
        setNewPrecio('');
        setNewCategory('');
        setNewDesc('');
        setImgFile(null);
          // mostrar mensaje de éxito
        })
        .catch(error => {
          console.error('Error al crear el producto:', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        });
  };
  const handleImageChange = (e) => {
       
    const file = e.target.files[0];
    setImgFile(file);
  };

  return (
      <div className=" mt-12">
        <caption className="m-1 text-xl md:text-blue-700">Productos</caption>
      <div className="flex  overflow-auto shadow-md sm:rounded-lg ">
      <div className=" overflow-auto max-h-96 flex-grow">
      <table className="relative text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky ">
          <tr className="border-y-4">
            <th scope="col" className="sticky p-4">Seleccionar</th>
            <th scope="col" className="sticky p-4">Nombre</th>
            <th scope="col" className="sticky p-4">Existencias</th>
            <th scope="col" className="sticky p-4">Tipo de Empaque</th>
            <th scope="col" className="sticky p-4">Precio</th> 
          </tr>
        </thead>
        <tbody >
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
        
         <article className="m-4 flex-wrap bg-gray-50  border-gray-300  text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 
      block py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
      dark:focus:border-blue-500 ">
         <h3 className="text-blue-950 font-bold">Adicionar Productos</h3>
         <div className="flex flex-col items-start m-2">
              <label className="text-blue-950 font-semibold">Imagen:</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {imgFile && <img src={URL.createObjectURL(imgFile)} alt="Preview" />} 
              </div>
            <div className="grid grid-cols-2 gap-4  place-items-center p-4 border-blue-500 bg-blue-50" >
              
              <div className="flex flex-col items-start m-2 ">
                <label className=" text-justify pr-5 text-gray-900">Nombre:</label>
                <input className="bg-white text-blue-950 font-semibold 
                border-2 px-3 h-10 rounded-md border-indigo-800/20 w-full" 
                id="newName" name="newName" type="text" placeholder={newName}
                onChange={manejoCambioNombre}></input>
              </div>
              <div className="flex flex-col items-start m-2 ">
                <label className="text-justify pr-5 text-gray-900 ">Categoria</label>
                <input className="bg-white text-blue-950 font-semibold border-2 px-3 
                rounded-md border-indigo-800/20 w-full h-10" 
                id="newCategory" name="newCategory" type="text" placeholder={newCategory} onChange={manejoCambioCategoria}></input>
              </div>
              <div className="flex flex-col items-start m-2 ">
                <label className="text-justify pr-5 text-gray-900 ">Tipo de Empaque</label>
                <input className="bg-white text-blue-950 font-semibold border-2 px-3 
                rounded-md border-indigo-800/20 w-full h-10" 
                id="newTipo" name="newTipo" type="text" placeholder={newTipo} onChange={manejoCambioTipo}></input>
              </div>
              <div className="flex flex-col items-start m-2 ">
                <label className=" text-justify pr-5 text-gray-900">Precio (COP):  </label>
                <input className="bg-whote text-yellow-900 font-semibold border-2 px-3 
                rounded-md border-indigo-800/20 w-full h-10" 
                id="newPrecio" name="newPrecio" type="number" placeholder={newPrecio} 
                min={1000} max={1000000} onChange={manejoCambioPrecio}></input>
              </div>
              <div className="flex flex-col items-start m-2 ">
                <label className="text-justify pr-5 text-gray-900 ">Existencias</label>
                <input className="bg-white text-blue-950 font-semibold border-2 px-3 
                rounded-md border-indigo-800/20 w-full h-10" 
                id="newExistencia" name="newExistencia" type="text" placeholder={newExistencia} onChange={manejoCambioExistencia}></input>
              </div>
              
              <div className="flex flex-col items-start m-2 ">
                <label className="text-justify pr-5 text-gray-600 ">Descripción</label>
                <input className="bg-white text-blue-950 font-semibold h-20 w-full overflow-wrap
                border-2 px-3 rounded-md border-indigo-800/20" 
                id="newDesc" name="newDesc" type="text" placeholder={newDesc} onChange={manejoCambioDesc}></input>
              </div>
              
            </div>
            <div className="flex flex-col items-start m-2 w-1/4">
              <button 
                      type="button"
                      className=" text-white 
                      font-bold text-center border-2 py-1 rounded-md
                       border-white bg-indigo-800 w-full h-15"
                      onClick={handleAddProduct}
                  >Agregar Producto </button>
              </div>
          </article>
      </div>
      
    </div>
    
    </div>
    
  );
};

export default Inventario;