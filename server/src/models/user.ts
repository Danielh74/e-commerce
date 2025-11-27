import { Schema, model } from "mongoose";

const AddressSchema = new Schema({
    fullName: String,
    phoneNumber: String,
    country: String,
    city: String,
    streetAddress: String,
    zipCode: String,
    isDefault: { type: Boolean, default: false }
}, { _id: false });

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    firstName: String,
    lastName: String,
    phoneNumber: String,

    addresses: [AddressSchema],

    wishlist: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],

    cart: {
        type: Schema.Types.ObjectId,
        ref: "Cart"
    },

    isVerified: { type: Boolean, default: false },
    verificationToken: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date

}, { timestamps: true });

export const User = model("User", UserSchema);
