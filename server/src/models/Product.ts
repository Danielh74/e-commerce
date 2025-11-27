import { model, Schema } from "mongoose";
import { colors, sizes } from "../utils/Enums";

const options = {
    toJSON: {
        virtuals: true
    },
    timestamps: true
}

const StockSchema = new Schema({
    color: { type: String, enum: colors, required: true },
    size: { type: String, enum: sizes, required: true },
    quantity: { type: Number, required: true, min: 0 },
    sku: String
}, { _id: false });

const ImageSchema = new Schema({
    url: { type: String, required: true },
    filename: { type: String, required: true }
}, { toJSON: { virtuals: true } });

ImageSchema.virtual("thumbnail").get(function () {
    return this.url.replace("/upload", "/upload/w_200");
});

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    brand: { type: Schema.Types.ObjectId, ref: "Brand" },

    price: { type: Number, required: true, min: 0 },

    stock: [StockSchema],
    images: [ImageSchema]
}, options);

export const Product = model("Product", ProductSchema);