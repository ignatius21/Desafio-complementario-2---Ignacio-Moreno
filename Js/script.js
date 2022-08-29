// VARIABLES

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaProductos = document.querySelector('#lista-productos');

let productosCarrito =[];


cargarEventListener();

function cargarEventListener(){
    //agregar el producto con el boton haciendo click
    listaProductos.addEventListener('click',agregarProducto);

    //eliminando productos del carrito
    carrito.addEventListener('click',eliminarProducto);

    // vaciar carrito completamente
    vaciarCarritoBtn.addEventListener('click',()=>{
        productosCarrito = []; // reseteo el carrito
        limpiarHTML(); // elimino todo el HTML
    });
    // Mostrando los productos desde localStorage
    document.addEventListener('DOMContentLoaded', () => {
        productosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []; // si el usuario no agrega nada,le muestra un arreglo vacio
        carritoHTML(); // imprimimos lo que tenemos en el localStorage en el HTML
   });

}


// FUNCIONES

function agregarProducto(e){
    e.preventDefault(); // lo que hace es prevenir la accion por default,que seria llevarnos al inicio de la pagina
    if(e.target.classList.contains('agregar-carrito')){ 
        const productoSeleccionado = e.target.parentElement.parentElement;

        leerProducto(productoSeleccionado);
    }  
};

// ELIMINANDO PRODUCTO DEL CARRITO

function eliminarProducto(e){
    if(e.target.classList.contains('borrar-producto')){
        Swal.fire({
            title: 'Desea Eliminar el Producto?',
            icon: 'warning',
            color: '#ffffff',
            allowOutsideClick: false,
            background:'#252525',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    allowOutsideClick: false,
                    background:'#252525',
                    color: '#ffffff',
                    icon: 'error',
                    title: 'Producto Eliminado',
                    showConfirmButton: false,
                    timer: 800      
                  });
              const productoId = e.target.getAttribute('data-id');
            //elimino por id del producto
            productosCarrito = productosCarrito.filter(producto => producto.id !== productoId);
            carritoHTML();
            }
          })    
    }
    sincronizarStorage();
}



// LEER EL CONTENIDO DEL HTML Y EXTRAER LA INFORMACION DEL PRODUCTO

function leerProducto(producto){

    //creo un objeto del producto
    const infoProducto = {
        imagen: producto.querySelector('img').src, // obtenemos la ruta de la imagen
        titulo: producto.querySelector('h4').textContent, // sacamos el texto del elemento con textContent
        precio: producto.querySelector('.precio span').textContent, //sacamos el texto del elemento
        id: producto.querySelector('a').getAttribute('data-id'), // para saber el id del producto
        cantidad: 1 
    }

    // revisando si el producto ya esta en el carrito
    const existe = productosCarrito.some(producto => producto.id === infoProducto.id);

    if(existe){
        const productos = productosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                producto.cantidad ++;
                return producto; // retorna el producto actualizado
            }else{
                return producto; // retorna los objetos que no son duplicados
            }
        });
        productosCarrito = [...productos];

    }else{
        productosCarrito =[...productosCarrito,infoProducto];
    }

    //agregando los elementos al carrito
    
    carritoHTML();
};

// MOSTRANDO EL CARRITO EN EL HTML

function carritoHTML(){
    //limpiar HTML
    limpiarHTML();

    // Recorro el carrito y genero el HTML
    productosCarrito.forEach(producto =>{
        const {imagen, titulo, precio, cantidad, id} = producto;
       const row =  document.createElement('tr');
       row.innerHTML = `
        <td><img src = "${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> <img src="img/trash.png" class= "borrar-producto" data-id="${id}"><img></td>
       `;

       // agrego el HTML del carrito al tbody
       contenedorCarrito.appendChild(row);
    });
    // Agregar el carrito al storage
    sincronizarStorage();
    
}

// AGREGANDO AL LOCALSTORAGE CON JSON
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
}


// ELIMINANDO LOS PRODUCTOS YA CARGADOS AL HTML

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}