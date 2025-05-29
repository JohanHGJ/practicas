const usuarios = [
    { nombre: "Marta", activo: true },
    { nombre: "Luis", activo: false },
    { nombre: "Camila", activo: true },
    { nombre: "Pedro", activo: false },
    { nombre: "Lucía", activo: true }
];

let usuariosActivos = usuarios.filter(usuario => usuario.activo);

let UserState = usuariosActivos.map(usuario => usuario.nombre);

console.log(`Usuarios activos: ${UserState.join(", ")}`);
