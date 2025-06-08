const usuarios = [
    { id: 1, nombre: "Laura", correo: "laura@example.com" },
    { id: 2, nombre: "Andrés", correo: "andres@example.com" },
    { id: 3, nombre: "María", correo: "maria@example.com" },
    { id: 4, nombre: "Carlos", correo: "carlos@example.com" }
];

const usuarioMaria = usuarios.find(usuario => usuario.nombre === "María");
console.log(`El correo de ${usuarioMaria.nombre} es ${usuarioMaria.correo}`);

// .find() ya te devuelve todo el objeto del usuario "María", entonces no necesitás volver a buscar por su correo.