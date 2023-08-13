import { model, Schema } from "mongoose";

let collection = 'products'

let schema = new Schema({
    stock: {type:Number},
    category: {type:String},
    title: {type:String},
    description: {type:String},
    code: {type:Number, required:true},
    price: {type:Number},
})

const Products = model(collection,schema)
export default Products
