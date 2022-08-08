// DESAFIO ARRAYS

const arreglo = [10,20,30];
console.log(arreglo);

// ARRAY con "new":
const meses = new Array("enero","febrero","marzo");
console.log(meses);


// ARRAY con multiple elementos:
const varios = [10,"hola",true,[10,20,30]];
console.log(varios);

const numeros = [10,20,30,40];
console.log(numeros);
console.table(numeros); 


// Acceder a un valor en el arreglo

console.log(numeros[1]); 
console.log(numeros[2]); 
console.log(numeros[0]);

// Saber el largo del array

console.log(meses.length);

// Recorrer el largo del arreglo

for(let i=0;i < meses.length;i++){
    console.log(meses[i]);
}

// Agregar o modificar un elemento de un arreglo

meses[0] = 'abril'; // ===> con esto modificamos el indice 0 del arreglo original
meses[4] = 'mayo'; // ===> con esto agregamos un nuevo mes al final del array

console.table(meses);

// Agregar elementos al final del array

meses.push('junio');
meses.push('julio');

// DESTRUCTURING DE ARRAYS

const numeros2 = [10,20,30,40,50,60]; 

const [, ,primero, ,segundo] = numeros2;

console.log(primero);
console.log(segundo);



// PROYECTO CARRITO

const carrito = [];

const producto ={
    nombre: 'monitor',
    precio: 30000
}

const producto2={
    nombre: 'tablet',
    precio: 40000
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto2); // ===> con esto enviamos el objeto producto2 al inicio de la tabla

console.table(carrito);

let resultado;
resultado = [...carrito,producto]; // ===> esto depende del orden en que declaramos los elementos, es como se van a mostrar en en arreglo final de la tabla...

console.table(resultado);

// Eliminar elementos del array con SPLICE()

carrito.splice(1,1); // ===> elimina desde el indice 1 hasta el indice 1 tambien en este caso.
console.table(carrito);



// Metodo .forEach()
const carrito2 = [
    {nombre:"monitor",precio:1000},
    {nombre:"teclado",precio:500},
    {nombre:"mouse",precio:100},
    {nombre:"parlante",precio:700},
]

carrito2.forEach(producto =>console.log(`El ${producto.nombre} cuesta ${producto.precio}`));


// Metodo .map()
carrito2.map(producto =>console.log(`El ${producto.nombre} cuesta ${producto.precio}`));

// La sintaxis es la misma que .forEach(),simplemente que .map() crea un nuevo array,lo cual no lo hace .forEach()



// para saber si un producto esta dentro del carrito uso:
const existe = carrito2.some(producto =>producto.nombre === 'teclado');
console.log(existe);


// para saber el monto total del carrito uso:
let resultado2 = carrito2.reduce((total,producto) => total + producto.precio,0);
console.log();


// para saber que productos cumplen con ciertos requisitos use:
let resultado3;
resultado3 = carrito2.filter(producto =>producto.precio > 300);
console.log(resultado3);


// para saber las especificaciones de un producto dentro del carrito uso:
const resultado4 = carrito2.find(producto=>producto.nombre ==='monitor');
console.log(resultado4);


// para saber si todos los productos cumplen con una especificacion uso:
const resultado5 = carrito2.every(producto => producto.precio < 50);
console.log(resultado5);



// para juntar 2 o mas carritos use:
const carrito3 =[
    {nombre:'televisor',precio:60000},
    {nombre:'teclado',precio:5000},
    {nombre:'luz led',precio:7000}
];

const carritoTotal = carrito2.concat(carrito3);
console.log(carritoTotal);
