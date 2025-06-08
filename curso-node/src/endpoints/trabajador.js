import { Router } from "express";

const router = Router();

router.post('', (req, res) => {
    res.send('Crear trabajador!');
});

router.get('/', (req, res) => {
    res.send('Lista de trabajadores!');
});

export default router;