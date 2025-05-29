const empleados = [
    { nombre: "Laura", horas: 160, categoria: "A" },
    { nombre: "Juan", horas: 120, categoria: "B" },
    { nombre: "Lucía", horas: 180, categoria: "A" },
    { nombre: "Pedro", horas: 100, categoria: "C" },
    { nombre: "Ana", horas: 150, categoria: "B" }
];

const tarifas = {
    A: 30,
    B: 25,
    C: 20
}

empleados.forEach(empleado => {
    const tarifa = tarifas[empleado.categoria];
    const sueldo = empleado.horas * tarifa;
    console.log(`${empleado.nombre} tiene un sueldo de $${sueldo}`);
    
});