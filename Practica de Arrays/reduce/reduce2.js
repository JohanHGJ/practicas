const usuarios = [
    { nombre: "Ana", pais: "Argentina" },
    { nombre: "Luis", pais: "Chile" },
    { nombre: "Sofía", pais: "Argentina" },
    { nombre: "Pedro", pais: "Uruguay" },
    { nombre: "Camila", pais: "Chile" },
    { nombre: "Lucas", pais: "Argentina" }
];


const conteoPorPais = usuarios.reduce((acc, usuario) => {
    acc[usuario.pais] = (acc[usuario.pais] || 0) + 1;
    return acc;
}, {});

console.log(conteoPorPais);