const compras = [
    { producto: "Pan", precio: 100 },
    { producto: "Leche", precio: 150 },
    { producto: "Huevos", precio: 200 },
    { producto: "Queso", precio: 250 }
];
const total = compras.reduce((acumulador, compra) => {
    return acumulador + compra.precio;
}, 0);

console.log(`Total gastado: $${total}`);