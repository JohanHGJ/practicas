import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Lista de productos');
});

// parametros
router.post('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Traer producto con id!');
});
export default router;