import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    displayName: String,
    wishlist: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

export const User = model('User', UserSchema);