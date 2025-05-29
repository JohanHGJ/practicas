const usuarios = [
    { nombre: "Clara", edad: 17, activo: true },
    { nombre: "Diego", edad: 22, activo: false },
    { nombre: "Lucía", edad: 19, activo: true },
    { nombre: "Martín", edad: 15, activo: true }
];

let usuariosActivosMayores = usuarios.filter(usuario => usuario.edad >= 18 && usuario.activo);

usuariosActivosMayores.forEach(usuario => {
    console.log(usuario.nombre);
});