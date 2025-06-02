const productos = [
    { id: 1, nombre: "Camiseta", precio: 30 },
    { id: 2, nombre: "Zapatos", precio: 80 },
    { id: 3, nombre: "Pantalón", precio: 45 },
    { id: 4, nombre: "Reloj", precio: 120 }
];

const ProductosCaros = productos.filter(producto => producto.precio > 50);

console.log(ProductosCaros);