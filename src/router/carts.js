import { Router } from 'express';
import Cart from '../dao/models/cart.js'

const cartRouter = Router ();


//CRUD Carts

//CREATE
cartRouter.post('/',async(req,res,next)=>{
    try {
        console.log(req.body)
        let one = await Cart.create(req.body)
        return res.status(201).json({
            success:true,
            message:`cart id: ${one._id}`
        })
    } catch (error) {
        next(error)        
    }
}) 

//READ
cartRouter.get('/',async(req,res,next)=>{
    try {
        let all = await Cart.find()
        //se buscan todos los estudiantes
        return res.status(200).json({
            success:true,
            response:all
        })
        
    } catch (error) {
        next(error)
        
    }

}) 

//UPDATE
cartRouter.put('/:id',async(req,res,next)=>{
    try {
        let { id } = req.params
        let data = req.body
        let one = await Cart.findByIdAndUpdate(id, data)
        if (one && data) {
            return res.status(200).json({
                success:true,
                message: `cart id: ${one._id} modified`
            })            
        }
        return res.status(404).json({
            success:false,
            message: `cart not found`
        }) 
        
    } catch (error) {
        next(error)
        
    }

}) 

//DELETE
cartRouter.delete('/:id',async(req,res,next)=>{
    try {
        let { id } = req.params        
        let one = await Cart.findByIdAndDelete(id)
        if (one) {
            return res.status(200).json({
                success:true,
                message: `cart deleted`
            })            
        }
        return res.status(404).json({
            success:false,
            message: `cart not found`
        }) 
        
    } catch (error) {
        next(error)
        
    }
}) 

export default cartRouter