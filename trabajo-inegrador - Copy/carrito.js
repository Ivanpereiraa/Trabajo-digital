function agregarProductoAlCarrito(nombreProducto, precioProducto) {
    const listaCarrito = document.getElementById('lista-carrito');
    
    // Crear un nuevo elemento de lista para el producto
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = `<span>${nombreProducto}</span> - <span>${precioProducto}</span>`;
    
    // Agregar el nuevo producto a la lista de carrito
    listaCarrito.appendChild(nuevoElemento);
}