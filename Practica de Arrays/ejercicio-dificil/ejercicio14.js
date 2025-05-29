const productos = [
    { nombre: "Teclado", precio: 100, stock: 5 },
    { nombre: "Mouse", precio: 50, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Webcam", precio: 80, stock: 0 },
    { nombre: "Parlantes", precio: 120, stock: 2 }
];

const productosDisponibles = productos.filter(producto => producto.stock > 0);

const nombres = productosDisponibles.map(producto => producto.nombre);
// .map() recorre el array disponibles y convierte cada objeto en solo su nombre.

console.log(`Productos disponibles: ${nombres.join(", ")}`);
// .join(", ") convierte el array en un solo string, separando los elementos con comas.
