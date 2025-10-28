import { useNavigate } from "react-router"
import type Item from "../../models/Item"

function ItemCard({ item }: { item: Item }) {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col overflow-hidden w-1/6 rounded shadow-sm z-1 cursor-pointer" onClick={() => { navigate(`/product/${item.id}`) }}>
            <header className="h-2/3">
                <img src={item.imageUrl} className="w-full h-full object-cover" />
            </header>
            <section className="flex flex-col p-2">
                <article className="flex justify-between font-semibold">
                    <span>{item.brand}</span>
                    <span>${item.price}</span>
                </article>
                <span className="text-gray-700">{item.name}</span>
            </section>
        </main>
    )
}

export default ItemCard