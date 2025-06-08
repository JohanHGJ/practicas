
// ejercicio 1
const frutas = ["manzana", "banana", "naranja"];

frutas.forEach(function(fruta) {
    console.log(fruta.toUpperCase());
    
})

const numeros = [1, 2, 3];
const numerosX10 = numeros.map(numero => numero * 10);
console.log(numerosX10);


const edades = [18, 25, 12, 30];
const mayoresEdad = edades.filter(edad => edad >= 18);
console.log(mayoresEdad);


const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Marta" }
];


const encontrarUsuario = usuarios.find(usuario => usuario.nombre === "Luis")
console.log(encontrarUsuario);

