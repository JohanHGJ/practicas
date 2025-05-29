const estudiantes = [
    { nombre: "Tomás", nota: 7 },
    { nombre: "Sofía", nota: 9 },
    { nombre: "Valentina", nota: 10 },
    { nombre: "Mateo", nota: 6 }
];

estudiantes.forEach(function(e){
    console.log(`${e.nombre} sacó un ${e.nota}`);
});