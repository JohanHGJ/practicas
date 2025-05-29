const cursos = [
    { titulo: "JavaScript Básico", duracion: 15 },
    { titulo: "Python Intermedio", duracion: 25 },
    { titulo: "React Avanzado", duracion: 30 },
    { titulo: "HTML y CSS", duracion: 10 }
];

let cursosMayorHoras = cursos.filter(curso => curso.duracion >= 20 );

cursosMayorHoras.forEach(curso => {
    console.log(`El curso ${curso.titulo} dura ${curso.duracion}`);
    
});