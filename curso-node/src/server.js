import express from 'express';
import trabajador from './endpoints/trabajador.js';
import productos from './endpoints/productos.js';
const app = express();


app.use('/trabajador' , trabajador);
app.use('/productos' , productos);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})