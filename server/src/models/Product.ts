import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    category: String,
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

export const Product = model('Product', ProductSchema);