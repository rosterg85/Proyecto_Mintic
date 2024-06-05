const url = "http://localhost:5000/data";

export const nuevoProducto = async producto => {
    try {
        console.log(producto);
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(producto), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const obtenerProductos = async () => {
    try {
        const resultado = await fetch(url);
        const productos = await resultado.json();
        //console.log(productos);
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerProducto = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const producto = await resultado.json();
        return producto;
    } catch (error) {
        console.log(error);
    }
}


export const editarProducto = async producto => {
    try {
        console.log(producto);
        await fetch(`${url}/${producto.id}`, {
            method: 'PUT', 
            body: JSON.stringify(producto), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const eliminarProducto = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}