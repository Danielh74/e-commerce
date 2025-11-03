import { useState } from "react";
import { brands, colors, sizes } from "../../../db"

function FilterBar() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    return (
        <form className="flex flex-wrap sticky top-14 flex-1 border-t border-b border-gray-300 bg-white mx-6 p-2 gap-5 justify-center">
            <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} className="border border-gray-500 min-w-1/6 p-1 rounded cursor-pointer">
                <option value="">Size</option>
                {sizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>

            <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)} className="border border-gray-500 p-1 min-w-1/6 rounded cursor-pointer">
                <option value="">Brand</option>
                {brands.map(brand => <option key={brand.id} value={brand.name}>{brand.name}</option>)}
            </select>

            <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)} className="border border-gray-500 p-1 min-w-1/6 rounded cursor-pointer">
                <option value="">Color</option>
                {colors.map(color => <option key={color} value={color}>{color}</option>)}
            </select>

            <select value={selectedSort} onChange={e => setSelectedSort(e.target.value)} className="border border-gray-500 p-1 min-w-1/6 rounded cursor-pointer">
                <option value="">Sort</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
            </select>
        </form>
    )
};

export default FilterBar;