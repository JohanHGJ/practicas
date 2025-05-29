const animales = [
    { tipo: "Gato", sonido: "Miau" },
    { tipo: "Perro", sonido: "Guau" },
    { tipo: "Pato", sonido: "Cuac" },
    { tipo: "Vaca", sonido: "Muuu" },
];

animales.forEach(function(animal){
    console.log(`El ${animal.tipo} hace "${animal.sonido}"`);
});