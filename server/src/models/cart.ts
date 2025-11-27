import { Schema, model } from "mongoose";

const CartItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    color: String,
    size: String,
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    priceAtAddition: Number
}, { _id: false });

const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [CartItemSchema]
}, { timestamps: true });

export const Cart = model("Cart", CartSchema);