const productos = [
    { nombre: "Cuaderno", precio: 3.2 },
    { nombre: "Lapicera", precio: 1.5 },
    { nombre: "Goma", precio: 0.5 },
    { nombre: "Regla", precio: 2.0 },
];

productos.forEach(function(producto){
    console.log(`El producto ${producto.nombre} cuesta ${producto.precio}`);
    
});