const ordenes = [
    { id: 1, cliente: "Ana", total: 150, pagado: true },
    { id: 2, cliente: "Luis", total: 80, pagado: false },
    { id: 3, cliente: "María", total: 220, pagado: true },
    { id: 4, cliente: "Pedro", total: 90, pagado: false }
];

let ordenesNoPagadas = ordenes.filter(orden => !orden.pagado);

ordenesNoPagadas.forEach(orden => {
    console.log(`La orden ${orden.id} de ${orden.cliente} no está pagada`);
});