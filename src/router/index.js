import { Router, application } from 'express';
import productRouter from './products.js';
import cartRouter from './carts.js';

const indexRouter = Router ();

//config las rutas de cada recurso
indexRouter.use('/products', productRouter)
indexRouter.use('/carts', cartRouter)

export default indexRouter