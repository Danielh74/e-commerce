import { Schema, model } from "mongoose";

const OrderItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },

    name: String, // snapshot
    brand: String,
    price: Number,

    color: String,
    size: String,

    quantity: Number,
}, { _id: false });

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [OrderItemSchema],

    shippingAddress: {
        fullName: String,
        phoneNumber: String,
        country: String,
        city: String,
        streetAddress: String,
        zipCode: String
    },

    totalPrice: Number,

    status: {
        type: String,
        enum: ["pending", "paid", "shipped", "delivered", "canceled"],
        default: "pending"
    },

    paymentId: String, // Stripe or PayPal ID
}, { timestamps: true });

export const Order = model("Order", OrderSchema);
