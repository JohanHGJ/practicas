
// Ejercicio 1
const frutas = ["manzana", "pera", "banana", "kiwi"];

frutas.forEach(fruta =>{
    console.log(`Fruta: ${fruta}`);
    
})

// Ejercicio 2
const numeros = [2, 15, 32];
const numerosTriplicados = numeros.map(numero => numero * 3);
console.log(numerosTriplicados);

// Ejercicio 3
const productos = [
    { id: 1, nombre: "Camiseta", precio: 20, stock: 10 },
    { id: 2, nombre: "Pantalón", precio: 50, stock: 0 },
    { id: 3, nombre: "Zapatos", precio: 80, stock: 5 }
];

const mayorStock = productos.filter(producto => producto.stock > 0)
.map(producto => producto.nombre);
console.log(mayorStock);

// Ejercicio 4

const ventas = [
    { producto: "Teclado", cantidad: 2, precioUnitario: 25 },
    { producto: "Mouse", cantidad: 3, precioUnitario: 15 },
    { producto: "Monitor", cantidad: 1, precioUnitario: 200 }
];

const totalIngresos = ventas.reduce((suma, venta) =>{
    return suma + (venta.cantidad * venta.precioUnitario);
}, 0);
console.log(totalIngresos);

const empleados = [
    { id: 1, nombre: "Ana", departamento: "Ventas", activo: true },
    { id: 2, nombre: "Luis", departamento: "IT", activo: false },
    { id: 3, nombre: "Marta", departamento: "Ventas", activo: true },
    { id: 4, nombre: "Carlos", departamento: "Marketing", activo: true }
];

const empleadosInactivos = empleados.find(empleado => empleado.activo === false)
const hayMarketing = empleados.some(empleado => {
    if (empleado.departamento === "Marketing"){
        return true;
    }
});
console.log(empleadosInactivos);
console.log(hayMarketing);


// ejercicio 6
const transacciones = [
    { id: 1, tipo: "deposito", monto: 100 },
    { id: 2, tipo: "retiro", monto: 50 },
    { id: 3, tipo: "deposito", monto: 200 },
    { id: 4, tipo: "transferencia", monto: 150 },
    { id: 5, tipo: "retiro", monto: 75 }
];

const clasificado = transacciones.reduce((total, trans) => {
    if (trans.tipo === "deposito") return total + trans.monto;
    if (trans.tipo === "retiro") return total - trans.monto;
    return total;
}, 0);
console.log(clasificado);

const transaccionesClasificadas = transacciones.reduce((acum, trans) => {
    acum[trans.tipo].push(trans.monto); // Agrega al array correspondiente
    return acum;
}, { deposito: [], retiro: [], transferencia: [] });

console.log(transaccionesClasificadas); 

// ejercicio 7 

const estudiantes = [
    { nombre: "Ana", notas: [7, 8, 6] },
    { nombre: "Luis", notas: [9, 5, 7] },
    { nombre: "Marta", notas: [10, 8, 9] },
    { nombre: "Carlos", notas: [4, 6, 5] }
];

const datosEstudiantes = estudiantes.map(estudiante =>{
    const promedio = estudiante.notas.reduce((sum, nota) => sum + nota, 0) / estudiante.notas.length;
    const promedioRedondeado = +promedio.toFixed(1);
    return { // con este return estoy creando el array para mostrar todos los datos correspondientes
        nombre: estudiante.nombre,
        promedio: promedioRedondeado,
        aprobado: promedioRedondeado >= 7
    };
});
console.log(datosOrdenados);


// ejercicio 8
const edades = [18, 22, 17, 25];

const mayores = edades.every(edad => edad >= 18)
console.log(mayores);
