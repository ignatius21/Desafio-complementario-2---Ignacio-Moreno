// Ejemplo N°1 (ciclo for)

for (let i = 10; i >= 1; i--) {
    console.log(`iteracion N° ${i}`);
}
console.log("Fin del ciclo");

// Ejemplo N°2 (ciclo dentro de otro ciclo)

for (let i = 1; i <= 5; i++) {
    console.log(`Empieza la iteracion N° ${i}`);
    for (let j = 1; j < 6; j++) {
        console.log(j);       
    }    
}
console.log("Fin del ciclo");


// Ejemplo N°3 (ciclo while)

let x = 1;

while(x <= 4){
    console.log(`Iteracion N° ${x}`);
    x++;
}
console.log("Fin de while");


// Ejemplo N°4 (ciclo do while)

let y = 1;

do{
    console.log(`Iteracion N° ${y}`);
    y++;
}while(y <=4);

console.log("Fin del ciclo do while");


// Ejemplo N°6 (ciclo for con validacion de numeros de saludos)

let numero = prompt("Cuantas veces desea repetir el saludo?");
let i = 0;

for(i = 0; i < numero;i++){
    console.log("hola");
}

// Ejemplo N°7 (switch)

var frase = "";
var autor = prompt("Ingrese autor");

switch(autor){
    case "darwin":
        frase = "Sin dudas no hay progreso";
        break;
    case "einstein":
        frase = "Dos cosas son infinitas: la estupidez humana y el universo;y no estoy seguro de lo segundo";
        break;
    case "batman":
        frase = "I belive in Harvey Dent";
        break;
    default:
        frase = "nada que comentar..."       
}

alert(frase);
console.log(frase);



