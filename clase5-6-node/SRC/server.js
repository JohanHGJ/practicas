
import express from "express"
import productos from './endpoints/productos.js' 
import empleados from './endpoints/empleados.js'
const app = express()

const PORT = 3000;

app.use(express.json());
app.use('/empleados', empleados)
app.use('/productos',productos);


app.listen(PORT, ()=> {
    console.log(`server is runing on http://localhost:${PORT}`)
})