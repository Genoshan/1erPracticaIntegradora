import { Router } from 'express';
import Product from '../dao/models/product.js'
import Cart from '../dao/models/cart.js';

const viewsRouter = Router ();


viewsRouter.get('/',async(req,res,next)=>{
    try {
        let all = await Product.find()
        //find all products
        res.render('index',{
            products:all,
            style:'index.css'
        });
       
    } catch (error) {
        next(error)
        
    }
})

viewsRouter.get('/products/:page', async (req, res, next) => {
    const productsPerPage = 10; // Número de productos por página
    const currentPage = parseInt(req.params.page);

    try {
        const totalProducts = await Product.countDocuments(); // Total de productos en la base de datos
        const startIndex = (currentPage - 1) * productsPerPage;

        const products = await Product.find()
            .skip(startIndex)
            .limit(productsPerPage);

        // Calcular números de página disponibles para la paginación
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

        res.render('index', {
            products: products,
            currentPage: currentPage,
            totalPages: totalPages,
            pageNumbers: pageNumbers,
            style: 'index.css'
        });
    } catch (error) {
        next(error);
    }
});


//CART 



viewsRouter.get('/carts', async (req, res, next) => {
    try {
        // Lógica para obtener los carritos desde la base de datos
        const carts = await Cart.find();        

        // Renderiza la vista de la página de carritos y pasa los datos
        // res.render('carts', { carts });
        res.render('carts',{
            carts:carts,
            style:'index.css'
        });
    } catch (error) {
        next(error);
    }

});

viewsRouter.get('/carts/:page', async (req, res, next) => {
    const cartsPerPage = 10; // Número de productos por página
    const currentPage = parseInt(req.params.page);

    try {
        const totalCarts = await Cart.countDocuments(); // Total de productos en la base de datos
        const startIndex = (currentPage - 1) * cartsPerPage;

        const carts = await Cart.find()
            .skip(startIndex)
            .limit(cartsPerPage);

        // Calcular números de página disponibles para la paginación
        const totalPages = Math.ceil(totalCarts / cartsPerPage);
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

        res.render('carts', {
            carts: carts,
            currentPage: currentPage,
            totalPages: totalPages,
            pageNumbers: pageNumbers,
            style: 'index.css'
        });
    } catch (error) {
        next(error);
    }
});





export default viewsRouter