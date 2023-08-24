import { Router, application } from 'express';
import productRouter from './products.js';
import cartRouter from './carts.js';
import Handlebars from 'handlebars';

const indexRouter = Router ();

//config las rutas de cada recurso
indexRouter.use('/products', productRouter)
indexRouter.use('/carts', cartRouter)

Handlebars.registerHelper('eq', function(value1, value2) {
    return value1 === value2;
});

export default indexRouter