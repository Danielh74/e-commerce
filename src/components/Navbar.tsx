'use client'

import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
//import { useNavigate } from "react-router"
import NavigateButton from "./UI/NavigateButton";
import { useState } from "react";
import { brands, categories } from '../../db'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
    //const navigate = useNavigate();
    const [featuredOpen, setFeaturedOpen] = useState({ open: false, gender: '' });
    const [cartDrawer, setCartDrawer] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const openFeaturedHandler = (gender: string) => {
        setFeaturedOpen(prev => ({ gender: gender, open: !(prev.gender === gender && prev.open) }))
    }

    return (
        <>
            <nav className="border-b border-b-gray-300 mx-10">
                <div className="flex justify-between py-3">
                    <div className="flex gap-5 flex-1 ">
                        <NavigateButton onClick={() => openFeaturedHandler('women')}>Women</NavigateButton>
                        <NavigateButton onClick={() => openFeaturedHandler('men')}>Men</NavigateButton>
                    </div>
                    <div className="flex-1">
                        <form className="flex border rounded-2xl px-3 py-1">
                            <input id="price" type="text" className="pr-3 pl-1 text-base flex-1 placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                            <button type="submit" className="hover:cursor-pointer">
                                <MagnifyingGlassIcon aria-hidden="true" className="size-5" />
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-end gap-5 flex-1">
                        <Menu as="div" className="relative">
                            <MenuButton className="focus:outline-none">
                                <UserIcon aria-hidden="true" className="size-6 hover:cursor-pointer" />
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-50 border border-gray-400 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                {loggedIn ?
                                    <>
                                        <MenuItem>
                                            <button
                                                className="w-full px-4 py-2 hover:cursor-pointer text-sm data-focus:bg-gray-300 data-focus:rounded">
                                                Account settings
                                            </button>
                                        </MenuItem>
                                        <MenuItem>
                                            <button
                                                className="w-full px-4 py-2 hover:cursor-pointer text-sm data-focus:bg-gray-300 data-focus:rounded">
                                                Support
                                            </button>
                                        </MenuItem>
                                        <MenuItem>
                                            <button
                                                className="w-full px-4 py-2 hover:cursor-pointer text-sm data-focus:bg-gray-300 data-focus:rounded">
                                                Order history
                                            </button>
                                        </MenuItem>
                                        <MenuItem>
                                            <button
                                                className="w-full px-4 py-2 hover:cursor-pointer text-sm data-focus:bg-gray-300 data-focus:rounded"
                                                onClick={() => { setLoggedIn(false) }}
                                            >
                                                Sign out
                                            </button>
                                        </MenuItem>
                                    </> :
                                    <>
                                        <MenuItem>
                                            <button
                                                className="w-full px-4 py-2 hover:cursor-pointer text-sm data-focus:bg-gray-300 data-focus:rounded"
                                                onClick={() => { setLoggedIn(true) }}
                                            >
                                                Log in
                                            </button>
                                        </MenuItem>
                                        <MenuItem>
                                            <button className="w-full px-4 py-2 hover:cursor-pointer text-sm data-focus:bg-gray-300 data-focus:rounded">
                                                Sign up
                                            </button>
                                        </MenuItem>
                                    </>
                                }
                            </MenuItems>
                        </Menu>
                        <HeartIcon aria-hidden="true" className="size-6 hover:cursor-pointer" />
                        <span className="flex hover:cursor-pointer" onClick={() => setCartDrawer(true)}>
                            <ShoppingCartIcon aria-hidden="true" className="size-6" />
                            <span className="border rounded-full text-xs h-fit px-1 self-center bg-black text-white font-medium">0</span>
                        </span>
                        <CartDrawer isOpen={cartDrawer} onClose={() => { setCartDrawer(false) }} />
                    </div>
                </div>
                <section className={`absolute -mx-10 w-full flex bg-white shadow-lg duration-150 h-fit pt-5 z-1 ${!featuredOpen.open && 'opacity-0 duration-150'}`} >
                    <article className="flex flex-col gap-2 p-10">
                        <span className="font-medium">Clothing</span>
                        {categories.map(category => {
                            if (category.gender === featuredOpen.gender || category.gender === 'unisex') {
                                return <button className="flex hover:cursor-pointer" key={category.id}>{category.name}</button>
                            }
                        })}
                    </article>
                    <article className="flex flex-col gap-2 p-10">
                        <span className="font-medium">Brands</span>
                        {brands.map(brand => <button className="flex hover:cursor-pointer" key={brand.id}>{brand.name}</button>)}
                    </article>
                </section>
            </nav>

        </>

    )
}
