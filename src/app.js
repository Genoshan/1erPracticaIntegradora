import express from 'express'
import handlebars from 'express-handlebars';
import __dirname from "./utils.js";
import { connect } from "mongoose";
import errorHandler from "../middlewares/errorHandler.js";
import notFoundHandler from "../middlewares/notFoundHandler.js";
import indexRouter from './router/index.js';
import viewsRouter from './router/views.router.js';

const PORT = 8080

//Conexion a BD Atlas

const ready = () => {
    console.log('Server ready on port '+PORT)
    connect('mongodb+srv://dbadmin:SWqGKevLXGAeKXFI@martincastrocluster.ir2if1f.mongodb.net/ecommerce')
        .then(()=> console.log('database connected'))
        .catch(err=>console.log(err))
}

const app = express()
//Template Engine Instance
app.engine('handlebars', handlebars.engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
}))
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use(express.static(__dirname+'/public'))


app.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenidos!</h1>
        <ul>    
            <li><a href="/products/1">Ver Productos</a></li>
            <li><a href="/carts/1">Ver Carrito</a></li>
        </ul>
    `);
});

app.use('/', viewsRouter)

//middlewares
app.use(express.json());
app.use( express.urlencoded( {extended:true} )); //para que el servidor pueda interpretar todas las querys

//router
app.use('/api', indexRouter)
app.use(errorHandler)
app.use(notFoundHandler)


app.listen(PORT, ready)



