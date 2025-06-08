import express from 'express';
import cors from "cors";
import trabajador from './endpoints/trabajador.js';
import productos from './endpoints/productos.js';
const app = express();
const PORT = 3000;


app.use(express.json());


app.use(cors());
app.use('/trabajador' , trabajador);
app.use('/productos' , productos);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('¡API de productos funcionando!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})