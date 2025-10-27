export interface Item {
    id: number;
    name: string;
    description: string;
    gender: Gender
    size: Size,
    color: string,
    category: string,
    brand: string,
    material: string,
    createdAt: Date,
    price: number,
    stock: number,
    imageUrl: string,
    sales: number
}

type Gender = "Male" | "Female" | "Unisex";
type Size = "One Size" | "XS" | "S" | "M" | "L" | "XL" | "XXL";