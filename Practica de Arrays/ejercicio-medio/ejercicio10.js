const alumnos = [
    { nombre: "Juan", nota: 4 },
    { nombre: "María", nota: 9 },
    { nombre: "Sofía", nota: 7 },
    { nombre: "Lucas", nota: 3 },
    { nombre: "Valeria", nota: 10 }
];

let alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 6);

alumnosAprobados.forEach(alumno => {
    console.log(`${alumno.nombre} aprobo con ${alumno.nota}`);
    
});