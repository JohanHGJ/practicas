import { Router } from "express";
const router = Router();

let productos = [
    { id: 1, nombre: 'Solo Leveling', categoria: 'Anime' },
    { id: 2, nombre: 'Naruto', categoria: 'Anime' },
    { id: 3, nombre: 'Breaking Bad', categoria: 'Serie de Netflix '}
];



router.get('/', (req, res) => {
    res.json(productos);
});

router.get('/:id' , (req, res) => {
    const { id } = req.params;
    const producto = productos.find(p => p.id === parseInt(id));

    if (!producto) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }
    res.json(producto);
});

// parametros
router.post('/', (req, res) => {
    const { nombre, categoria } = req.body;

    if (!nombre || !categoria) {
        return res.status(400).json({ error: 'Nombre y categoría son obligatorios' });
    }

    const nuevoProducto = {
        id: productos.length + 1,
        nombre,
        categoria
    };

    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);  // Código 201: "Creado"
});

// PUT /productos/:id -> Actualizar un producto
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, categoria } = req.body;
    const productoIndex = productos.findIndex(p => p.id === parseInt(id));

    if (productoIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    productos[productoIndex] = {
        ...productos[productoIndex],
        nombre: nombre || productos[productoIndex].nombre,  // Si no se envía nombre, mantiene el existente
        categoria: categoria || productos[productoIndex].categoria
    };

    res.json(productos[productoIndex]);
});

// DELETE /productos/:id -> Eliminar un producto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const productoIndex = productos.findIndex(p => p.id === parseInt(id));

    if (productoIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    productos = productos.filter(p => p.id !== parseInt(id));
    res.status(204).send();  // Código 204: "Sin contenido" (éxito pero no retorna nada)
});


export default router;