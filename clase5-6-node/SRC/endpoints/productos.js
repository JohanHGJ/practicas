import { Router } from "express";
import validateString from "./controller.js";
const router = Router();

let productos = [];
let id = 1;

// Crear un nuevo producto
router.post('/', (req, res) => {
    const data = req.body;
    const newProduct = {
        id: id++,
        ...data
    };
    productos.push(newProduct);
    console.log(productos);
    res.json({
        mensaje: 'Producto creado correctamente',
        producto: newProduct,
        status: 200
    });
});

// Obtener todos los productos
router.get('/', (req, res) => {
    res.json(productos);
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
    const paramId = +req.params.id;
    validateString(paramId, res);
    const producto = productos.find(p => p.id === paramId);
    if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
});

// Actualización parcial de un producto
router.patch('/:id', (req, res) => {
    const paramId = +req.params.id;
    const data = req.body;
    validateString(paramId, res);

    const index = productos.findIndex(p => p.id === paramId);
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    productos[index] = {
        ...productos[index],
        ...data
    };

    res.json({
        mensaje: 'Producto actualizado parcialmente',
        producto: productos[index],
        status: 200
    });
});

// Actualización total de un producto
router.put('/:id', (req, res) => {
    const paramId = +req.params.id;
    const data = req.body;
    validateString(paramId, res);

    const index = productos.findIndex(p => p.id === paramId);
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    productos[index] = {
        id: paramId,
        ...data
    };

    res.json({
        mensaje: 'Producto actualizado completamente',
        producto: productos[index],
        status: 200
    });
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
    const paramId = +req.params.id;
    validateString(paramId, res);

    const index = productos.findIndex(p => p.id === paramId);
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    const eliminado = productos.splice(index, 1);
    res.json({
        mensaje: 'Producto eliminado',
        producto: eliminado[0],
        status: 200
    });
});

export default router;
