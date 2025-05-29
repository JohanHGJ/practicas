const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Sofía", edad: 15 },
    { nombre: "Marcos", edad: 19 }
];

let mayores = personas.filter(persona => persona.edad >= 18);
mayores.forEach(persona => {
    console.log(`${persona.nombre} es mayor de edad`);
    
});