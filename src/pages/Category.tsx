import { useEffect, useState } from 'react'
import type Item from '../models/Item';
import { clothing } from '../../db'
import { useParams } from 'react-router';
import FilterBar from '../components/UI/FilterBar';
import ItemCard from '../components/UI/ItemCard';

function Category() {
    const [categoryItems, setCategoryItems] = useState<Item[]>([]);
    const { category, gender } = useParams<{ category: string, gender?: string }>();

    useEffect(() => {
        if (gender) {
            setCategoryItems(clothing.filter(item => item.category === category && (item.gender === gender || item.gender === 'Unisex')));
        } else {
            setCategoryItems(clothing.filter(item => item.category === category));
        }

    }, [category, gender])


    return (
        <main className='flex flex-col'>
            <header>
                {category}
            </header>
            <article>
                <FilterBar />
            </article>

            <section className='flex flex-wrap mt-4 justify-center gap-5'>
                {categoryItems.map(item => <ItemCard key={item.id} item={item} />)}
            </section>

        </main>

    )
};

export default Category;