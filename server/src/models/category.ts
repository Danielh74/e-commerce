import { model, Schema } from "mongoose";
import { genders } from "../utils/Enums";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: genders,
        required: true
    }
});

export const Category = model('Category', CategorySchema);