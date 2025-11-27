import { Schema, model } from "mongoose";

const BrandSchema = new Schema({
    name: { type: String, required: true, unique: true },
    logoUrl: String,
    description: String
}, { timestamps: true });

export const Brand = model("Brand", BrandSchema);
