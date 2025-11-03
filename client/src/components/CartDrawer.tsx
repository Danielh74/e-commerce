import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline"
import CartItem from './CartItem';
import { clothing } from '../../db'
import type Item from '../models/Item';

type Props = {
    isOpen: boolean,
    onClose: () => void
}

const CartDrawer = ({ isOpen, onClose }: Props) => {
    const item: Item = clothing[0];
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                        >
                            <TransitionChild>
                                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="relative text-red-600 bg-white rounded-full p-1 hover:cursor-pointer"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <aside className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                                <section className="px-4 sm:px-6">
                                    <DialogTitle className="text-xl font-medium border-b border-gray-300">Your Cart</DialogTitle>
                                </section>
                                <section className="relative mt-6 flex flex-col gap-3 px-4 sm:px-6 overflow-auto">
                                    <CartItem item={item} />
                                    <CartItem item={item} />
                                    <CartItem item={item} />
                                    <CartItem item={item} />
                                </section>
                                <section className='flex flex-col px-5 py-2'>
                                    <article className='flex justify-between'>
                                        <span>Order price</span>
                                        <span className='font-medium'>{item.price * 4}$</span>
                                    </article>
                                    <article className='flex justify-between'>
                                        <span>Est. shipping price</span>
                                        <span className='font-medium'>30.00$</span>
                                    </article>
                                    <article className='flex justify-between mt-5'>
                                        <span>Total</span>
                                        <span className='font-medium'>{(item.price * 4 + 30.00).toFixed(2)}$</span>
                                    </article>
                                </section>
                                <section className='flex flex-col px-5 py-2'>
                                    <button className='text-white bg-black p-2 hover:cursor-pointer hover:bg-black/60'>Purchase</button>
                                </section>
                            </aside>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default CartDrawer