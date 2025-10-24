import React from 'react'
import image from '../assets/white-shirt.jpg'
import type { Item } from '../models/Item'

const CartItem = ({ item }: { item: Item }) => {
    const quantity = 1;
    return (
        <main className='flex gap-3'>
            <section className='flex-1'>
                <img src={image} className='w-full h-full max-h-44' />
            </section>
            <section className='flex flex-col flex-1'>
                <div className='flex flex-col'>
                    <span className='text-lg'>{item.name}</span>
                    <span className='font-medium mb-5'>{item.price}$</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm'>Color: {item.color}</span>
                    <span className='text-sm'>Size: {item.size}</span>
                    <span className='text-sm'>Quantity: {quantity}</span>
                    <span className='text-sm'>Overall Price: {item.price * quantity}$</span>
                </div>

            </section>

        </main>
    )
}

export default CartItem