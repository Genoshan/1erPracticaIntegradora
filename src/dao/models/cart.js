import { model, Schema } from "mongoose";

let collection = 'carts'

let schema = new Schema({
    product: {type:String, require:true},
    quantity: {type:Number, require:true}
})

const Carts = model(collection,schema)
export default Carts