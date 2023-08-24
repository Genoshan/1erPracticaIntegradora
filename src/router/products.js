import { Router } from 'express';
import Product from '../dao/models/product.js'

const productRouter = Router ();


//CRUD Products

//CREATE
productRouter.post('/',async(req,res,next)=>{
    try {
        let one = await Product.create(req.body)
        return res.status(201).json({
            success:true,
            message:`product id: ${one._id}`
        })
    } catch (error) {
        next(error)        
    }
}) 

//READ
productRouter.get('/',async(req,res,next)=>{
    try {
        let all = await Product.find()
        //find all lproducts
        return res.status(200).json({
            success:true,
            response:all
        })
        
    } catch (error) {
        next(error)
        
    }

}) 

//UPDATE
productRouter.put('/:id',async(req,res,next)=>{
    try {
        let { id } = req.params
        let data = req.body
        let one = await Product.findByIdAndUpdate(id, data)
        if (one && data) {
            return res.status(200).json({
                success:true,
                message: `product id: ${one._id} modified`
            })            
        }
        return res.status(404).json({
            success:false,
            message: `product not found`
        }) 
        
    } catch (error) {
        next(error)
        
    }

}) 

//DELETE
productRouter.delete('/:id',async(req,res,next)=>{
    try {
        let { id } = req.params        
        let one = await Product.findByIdAndDelete(id)
        if (one) {
            return res.status(200).json({
                success:true,
                message: `product deleted`
            })            
        }
        return res.status(404).json({
            success:false,
            message: `product not found`
        }) 
        
    } catch (error) {
        next(error)
        
    }
}) 

export default productRouter