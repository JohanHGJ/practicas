const empleados = [
    { nombre: "Laura", salario: 2500 },
    { nombre: "Pedro", salario: 1800 },
    { nombre: "Marta", salario: 3200 },
    { nombre: "Juan", salario: 1500 }
];

// const empleadosConAltoSalario = empleados.filter(function(empleado){
//     return empleado.salario > 2000;
// });

// empleadosConAltoSalario.forEach(function(empleado){
//     console.log(`${empleado.nombre} gana ${empleado.salario}`);
    
// });

let empleadosMayorSalario = empleados.filter(empleado =>
    empleado.salario > 2000);

empleadosMayorSalario.forEach(empleado =>{
    console.log(`${empleado.nombre} gana ${empleado.salario}`);
});