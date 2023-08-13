import express from 'express'
import { connect } from "mongoose";
import errorHandler from "../middlewares/errorHandler.js";
import notFoundHandler from "../middlewares/notFoundHandler.js";
import indexRouter from './router/index.js';

const PORT = 8080

//Conexion a BD Atlas

const ready = () => {
    console.log('Server ready on port '+PORT)
    connect('mongodb+srv://dbadmin:SWqGKevLXGAeKXFI@martincastrocluster.ir2if1f.mongodb.net/ecommerce')
        .then(()=> console.log('database connected'))
        .catch(err=>console.log(err))
}

const app = express()

//middlewares
app.use(express.json());
app.use( express.urlencoded( {extended:true} )); //para que el servidor pueda interpretar todas las querys

//router
app.use('/api', indexRouter)
app.use(errorHandler)
app.use(notFoundHandler)


app.listen(PORT, ready)



