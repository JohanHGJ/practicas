const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", año: 1963 },
    { titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", año: 1985 },
    { titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 }
];

const encontrarLibro = libros.find(libro => libro.autor === 'Gabriel García Márquez');

console.log(encontrarLibro);



    
