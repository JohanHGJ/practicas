const estudiantes = [
    { nombre: "Carlos", nota: 85 },
    { nombre: "Lucía", nota: 65 },
    { nombre: "Pedro", nota: 90 },
    { nombre: "Ana", nota: 55 },
    { nombre: "Marta", nota: 72 }
];

const resultado = estudiantes.filter(estudiante => estudiante.nota > 70).map(estudiante => estudiante.nombre);
console.log(resultado);
