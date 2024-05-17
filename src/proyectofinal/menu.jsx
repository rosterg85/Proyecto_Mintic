import React, { useState } from 'react';



const productsData = [
  { id: 1, name: 'Producto 1', stock: 10, empaque: 'Caja', price: 10.50 },
  { id: 2, name: 'Producto 2', stock: 5, empaque: 'Bolsa', price: 8.75 },
  { id: 3, name: 'Producto 3', stock: 20, empaque: 'Bolsa', price: 12.25 },
  { id: 4, name: 'Producto 4', stock: 15, empaque: 'Caja', price: 15.00 },
];

const HomePage = ({ username }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [Adicionar, setAdicionar] = useState('');
  const [products, setProducts] = useState(productsData);
  const [newName, setNewName] = useState('');
  const [newExistencia, setNewExistencia] = useState('');
  const [newTipo, setNewTipo] = useState('');
  const [newPrecio, setNewPrecio] = useState('');

  const handleRowSelect = (productId) => {
    setSelectedProductId(productId);
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      setNewPrice(selectedProduct.price.toString());
      setAdicionar(selectedProduct.stock.toString());
    }
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

  const handleUpdateProduct = () => {
    if (!selectedProductId) {
      alert('Por favor selecciona un producto.');
      return;
    }

    const updatedProducts = products.map(product => {
      if (product.id === selectedProductId) {
        let updatedStock=0;
        if(Adicionar){ updatedStock = product.stock + parseInt(Adicionar);}
        else { updatedStock = product.stock; }
        
        return {
          ...product,
          price: parseFloat(newPrice),
          stock: parseFloat(updatedStock)
        };
      }
      return product;
    });
    

    setProducts(updatedProducts);
    setNewPrice('');
    setAdicionar('');
    setSelectedProductId(null);
  };

  const handleDelProduct = () =>{
    if (!selectedProductId) {
        alert('Por favor selecciona un producto.');
        return;
      }
      let newProducts = products.filter(product => product.id !== selectedProductId);
            setProducts(newProducts);
            setSelectedProductId(null);
  };

const handleAddProduct = () => {
        if (!newName || !newExistencia || !newTipo || !newPrecio) {
          alert('Por favor completa todos los campos.');
          return;
        }
    
        const nuevoProducto = {
          id: products.length + 1,
          name: newName,
          stock: parseInt(newExistencia),
          empaque: newTipo, // Puedes cambiar esto según tus necesidades
          price: parseFloat(newPrecio),
        };
        
    setProducts([...products, nuevoProducto]);
    setNewName('');
    setNewExistencia('');
    setNewTipo('');
    setNewPrecio('');
  };

  return (
    <div className="home-page">

      <h2>Bienvenido, A la pagina de inventario {username}!</h2>
      
      
      <div class="flex relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="m-1 text-xl">Productos</caption>
        <thead   class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr class="border-y-4">
            <th scope="col" class="p-4">Seleccionar</th>
            <th scope="col" class="p-4">Nombre</th>
            <th scope="col" class="p-4">Existencias</th>
            <th scope="col" class="p-4">Tipo de Empaque</th>
            <th scope="col" class="p-4">Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                <input type="radio" name="selectedProduct" value={product.id} checked={selectedProductId === product.id}
                  onChange={() => handleRowSelect(product.id)}
                />
              </td>
              <td class="px-6 py-4">{product.name}</td>
              <td class="px-6 py-4">{product.stock}</td>
              <td class="px-6 py-4">{product.empaque}</td>
              <td class="px-6 py-4">${product.price.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div class="m-4 flex-wrap bg-gray-50  border-gray-300  text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <label class="m-2" htmlFor="newPrice">Nuevo Precio: </label>
        <input class="border border-gray-800" type="number" id="newPrice" min="0" value={newPrice} onChange={handlePriceChange} />
        <label class="m-2" htmlFor="Adicionar">Adicionar productos: </label>
        <input class=" border border-gray-800" type="number" id="Adicionar" min="0" value={Adicionar} onChange={handleStockChange} />
       
       <div>
        <button  class="m-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={handleUpdateProduct}>Actualizar Producto</button>
        <button  class="m-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={handleDelProduct}>Borrar Producto</button>
         </div>
      </div>
      </div>
      <div class="font-sans text-black-500" >
      <h3 class="m-8 text-2xl" >Agregar nuevo Producto</h3>
      <table class=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr class="border-y-4">
            <th scope="col" class="p-4">Nombre</th>
            <th scope="col" class="p-4">Existencias</th>
            <th scope="col" class="p-4">Tipo de Empaque</th>
            <th scope="col" class="p-4">Precio</th>
          </tr>
        </thead>
        <tbody>
            <td class="px-6 py-4"> <input class="border border-gray-800"  type="text" id="newName" name="newName"   value={newName} onChange={manejoCambioNombre} /> </td>
            <td class="px-6 py-4"> <input class="border border-gray-800"  type="text" id="newExistencia" name="newExistencia"  value={newExistencia} onChange={manejoCambioExistencia}  /> </td>
            <td class="px-6 py-4"> <input class="border border-gray-800"  type="text" id="newTipo" name="newTipo" value={newTipo} onChange={manejoCambioTipo} /> </td>
            <td class="px-6 py-4"> <input class="border border-gray-800"  type="text" id="newPrecio" name="newPrecio" value={newPrecio}  onChange={manejoCambioPrecio}/> </td>
        </tbody>
        <button  class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={handleAddProduct}>Ingresar Producto</button>
      </table>

      </div>
    </div>
    
  );
};

export default HomePage;