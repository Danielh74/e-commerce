import { useEffect, useState } from 'react'
import type { Item } from '../models/Item';
import { clothing } from '../../db'
import { useParams } from 'react-router';

const Category = () => {
    const [categoryItems, setCategoryItems] = useState<Item[]>([]);
    const { category, gender } = useParams()

    useEffect(() => {
        let items: Item[] = []
        if (gender) {
            items = clothing.filter(item => item.category === category && (item.gender === gender || item.gender === 'Unisex'));
        } else {
            items = clothing.filter(item => item.category === category);
        }

        setCategoryItems(items);
    }, [category, gender])


    return (
        <div>
            <span>
                {category}
            </span>
            {categoryItems.map(item => <span>{item.name}</span>)}
        </div>

    )
}

export default Category