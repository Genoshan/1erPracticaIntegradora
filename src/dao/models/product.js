import { model, Schema } from "mongoose";

let collection = 'products'

let schema = new Schema({
    title: {type:String},
    category: {type:String},
    description: {type:String},    
    stock: {type:Number},
    price: {type:Number},
})

const Products = model(collection,schema)
export default Products
