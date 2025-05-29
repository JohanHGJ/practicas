const libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Rayuela", autor: "Julio Cortázar" }
];

const libroOrwell = libros.find(libro => libro.autor === "George Orwell");

console.log(`El libro de George Orwell es "${libroOrwell.titulo}"`);

