import type Item from "./src/models/Item";
import image from "./src/assets/white-shirt.jpg";

export const clothing: Item[] = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        description: "Soft cotton t-shirt with a regular fit, perfect for everyday wear.",
        gender: 'Unisex',
        sizes: { XS: 5, S: 10, M: 45, L: 20, XL: 15, XXL: 5 },
        color: "white",
        category: "T-shirts",
        brand: "FitWear",
        material: "100% cotton",
        createdAt: new Date("2025-09-15T12:00:00Z"),
        price: 29.99,
        stock: 100,
        imageUrl: image,
        sales: 150
    },
    {
        id: 2,
        name: "Denim Jacket",
        description: "Stylish blue denim jacket with button closure and chest pockets.",
        gender: 'Male',
        sizes: { XS: 2, S: 10, M: 20, L: 15, XL: 10, XXL: 5 },
        color: "blue",
        category: "Jackets",
        brand: "UrbanEdge",
        material: "Denim",
        createdAt: new Date("2025-08-20T10:30:00Z"),
        price: 89.5,
        stock: 62,
        imageUrl: "https://picsum.photos/id/2/200/300",
        sales: 60
    },
    {
        id: 3,
        name: "Black Leather Boots",
        description: "Durable leather boots with rubber soles and side zipper.",
        gender: 'Female',
        sizes: { XS: 0, S: 5, M: 15, L: 10, XL: 5, XXL: 0 },
        color: "black",
        category: "Shoes",
        brand: "TrailStep",
        material: "Leather",
        createdAt: new Date("2025-10-01T09:45:00Z"),
        price: 129.99,
        stock: 35,
        imageUrl: "https://picsum.photos/id/3/200/300",
        sales: 16
    },
    {
        id: 4,
        name: "Gray Sweatpants",
        description: "Comfortable fleece sweatpants with elastic waistband and drawstring.",
        gender: 'Unisex',
        sizes: { XS: 5, S: 15, M: 30, L: 60, XL: 25, XXL: 10 },
        color: "gray",
        category: "Pants",
        brand: "CozyLife",
        material: "Cotton Blend",
        createdAt: new Date("2025-09-10T08:15:00Z"),
        price: 49.99,
        stock: 145,
        imageUrl: "https://picsum.photos/id/4/200/300",
        sales: 240
    },
    {
        id: 5,
        name: "Floral Summer Dress",
        description: "Lightweight floral dress ideal for summer outings.",
        gender: 'Female',
        sizes: { XS: 0, S: 30, M: 25, L: 10, XL: 5, XXL: 0 },
        color: "pink",
        category: "Dresses",
        brand: "BloomWear",
        material: "Polyester",
        createdAt: new Date("2025-07-30T14:25:00Z"),
        price: 59.0,
        stock: 70,
        imageUrl: "https://picsum.photos/id/5/200/300",
        sales: 21
    },
    {
        id: 6,
        name: "Black Hoodie",
        description: "Cozy black hoodie with kangaroo pocket and adjustable hood.",
        gender: 'Male',
        sizes: { XS: 5, S: 10, M: 25, L: 20, XL: 40, XXL: 10 },
        color: "black",
        category: "Hoodies",
        brand: "StreetLine",
        material: "Fleece",
        createdAt: new Date("2025-10-10T17:00:00Z"),
        price: 69.99,
        stock: 110,
        imageUrl: "https://picsum.photos/id/6/200/300",
        sales: 140
    },
    {
        id: 7,
        name: "Running Shorts",
        description: "Lightweight athletic shorts with breathable mesh lining.",
        gender: 'Male',
        sizes: { XS: 5, S: 15, M: 55, L: 20, XL: 10, XXL: 5 },
        color: "navy",
        category: "Shorts",
        brand: "ActivePro",
        material: "Polyester",
        createdAt: new Date("2025-09-25T11:10:00Z"),
        price: 34.5,
        stock: 110,
        imageUrl: "https://picsum.photos/id/7/200/300",
        sales: 100
    },
    {
        id: 8,
        name: "Wool Scarf",
        description: "Soft and warm wool scarf, perfect for cold days.",
        gender: 'Unisex',
        sizes: { OneSize: 75 },
        color: "red",
        category: "Accessories",
        brand: "WinterTouch",
        material: "Wool",
        createdAt: new Date("2025-10-05T13:50:00Z"),
        price: 24.99,
        stock: 75,
        imageUrl: "https://picsum.photos/id/8/200/300",
        sales: 12
    },
];




export const categories = [
    { "id": 1, "name": "T-shirts", "gender": "unisex" },
    { "id": 2, "name": "Jackets", "gender": "unisex" },
    { "id": 3, "name": "Pants", "gender": "unisex" },
    { "id": 4, "name": "Dresses", "gender": "women" },
    { "id": 5, "name": "Footwear", "gender": "unisex" },
    { "id": 6, "name": "Hoodies", "gender": "unisex" },
    { "id": 7, "name": "Shorts", "gender": "unisex" },
    { "id": 8, "name": "Accessories", "gender": "unisex" }
]
export const brands = [
    { "id": 1, "name": "FitWear" },
    { "id": 2, "name": "UrbanEdge" },
    { "id": 3, "name": "TrailStep" },
    { "id": 4, "name": "CozyLife" },
    { "id": 5, "name": "BloomWear" },
    { "id": 6, "name": "StreetLine" },
    { "id": 7, "name": "ActivePro" },
    { "id": 8, "name": "WinterTouch" }
];
export const colors = [
    "white",
    "black",
    "blue",
    "gray",
    "pink",
    "navy",
    "red"
];
export const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "One Size",
    "38"
];