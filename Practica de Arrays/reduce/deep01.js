const estudiantes = [
    { nombre: "Carlos", nota: 85 },
    { nombre: "Lucía", nota: 65 },
    { nombre: "Pedro", nota: 90 },
    { nombre: "Ana", nota: 55 },
    { nombre: "Marta", nota: 72 }
];

const resultado = estudiantes.filter(estudiante => estudiante.nota >= 70); // aqui se filtran los estudiantes con una nota mayor o igual a 70
const suma = resultado.reduce((acc, estudiante) => acc + estudiante.nota, 0); // Para cada estudiante aprobado, toma la suma acumulada hasta ahora y agrégale su nota. Empieza sumando desde cero."
const promedio = resultado.length > 0 ? (suma / resultado.length).toFixed(2) : 0; // Si hay estudiantes aprobados, divide la suma total entre el número de estudiantes aprobados para obtener el promedio. Si no hay estudiantes aprobados, el promedio es 0
console.log(`El promedio de las notas aprobadas es: ${promedio}`);

