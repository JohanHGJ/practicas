const gastos = [
    { categoria: "comida", monto: 250 },
    { categoria: "transporte", monto: 100 },
    { categoria: "entretenimiento", monto: 300 },
    { categoria: "comida", monto: 150 },
    { categoria: "transporte", monto: 200 },
    { categoria: "comida", monto: 100 }
];


const resumen = gastos.reduce((acc, gasto) => {
    acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.monto;
    return acc;
}, {});


const gastoTotal = Object.values(resumen).reduce((a, b) => a + b, 0);


Object.entries(resumen).forEach(([categoria, monto]) => {
    const porcentaje = ((monto / gastoTotal) * 100).toFixed(0);
    console.log(`${categoria} representa el ${porcentaje}% del gasto total`);
});
