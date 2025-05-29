const ventas = [
    { vendedor: "Ana", monto: 500, fecha: "2024-05-10" },
    { vendedor: "Luis", monto: 1500, fecha: "2024-06-01" },
    { vendedor: "Ana", monto: 700, fecha: "2024-06-05" },
    { vendedor: "Carlos", monto: 400, fecha: "2024-06-03" },
    { vendedor: "Luis", monto: 800, fecha: "2024-05-20" }
];

let ventasJunio = ventas.filter(venta => venta.fecha.startsWith("2024-06"));

const resumen = {};

ventasJunio.forEach(venta => {
    if (resumen[venta.vendedor]){
        resumen[venta.vendedor] += venta.monto;
    }else {
        resumen[venta.vendedor] = venta.monto;
    }
});

for (let vendedor in resumen) {
    console.log(`${vendedor} vendio un total de ${resumen[vendedor]} en junio`);
    
}