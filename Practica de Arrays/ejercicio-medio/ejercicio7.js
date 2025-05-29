const libros = [
    { titulo: "1984", autor: "George Orwell", paginas: 328 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", paginas: 417 },
    { titulo: "La Sombra del Viento", autor: "Carlos Ruiz Zafón", paginas: 565 }
];

let librosMasPaginas = libros.filter(libro => libro.paginas > 300);

librosMasPaginas.forEach(libro => {
    console.log(`${libro.titulo}, de ${libro.autor}, tiene ${libro.paginas} paginas`);
});