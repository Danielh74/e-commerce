export default interface Item {
    id: number;
    name: string;
    description: string;
    gender: Gender
    sizes: Partial<Record<Size, number>>;
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
type Size = "OneSize" | "XS" | "S" | "M" | "L" | "XL" | "XXL";