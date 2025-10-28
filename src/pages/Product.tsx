import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { clothing } from '../../db';
import type Item from '../models/Item';

function Product() {
    const { id } = useParams() as { id: string };
    const numId = parseInt(id);
    const [product, setProduct] = useState<Item | undefined>();

    useEffect(() => {
        setProduct(clothing.find(product => product.id === numId))
    }, [numId])
    return (
        product ?
            <main className='flex h-screen'>
                <section>
                    <img src={product.imageUrl} className='w-full h-full p-5' />
                </section>
                <section className='flex flex-1 flex-col p-5'>
                    <span className='text-4xl font-medium'>{product.name}</span>
                    <span className='text-lg'>{product.description}</span>
                    <span className='font-medium text-2xl mt-8'>${product.price}</span>
                    <span className='text-lg'>Color: {product.color}</span>
                    <button className=' text-white bg-black p-2 hover:cursor-pointer hover:bg-black/60'>Add To Cart</button>
                </section>
            </main>
            :
            <div></div>
    )
}

export default Product