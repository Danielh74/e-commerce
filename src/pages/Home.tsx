import banner from '../assets/banner.jpg';
import men from '../assets/men_category.jpg';
import women from '../assets/women_category.jpg';
import menPants from '../assets/men_pants.jpg';
import menShirt from '../assets/men-shirt.jpg';
import womenPants from '../assets/women_pants.jpg';
import womenShirt from '../assets/women_shirt.jpg';
import { categories } from '../../db';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    return (
        <main>
            <header className='mt-2'>
                <img src={banner} className='w-full' />
            </header>
            <section className='flex flex-col text-center mt-2'>
                <span className='font-bold text-4xl'>All Categories</span>
                <article className='flex justify-around'>
                    {categories.map(category =>
                        <button
                            type='button'
                            className='p-10 border my-4 rounded-full hover:cursor-pointer'
                            onClick={() => { navigate(`/categories/${category.name}`) }}>
                            {category.name}
                        </button>
                    )}
                </article>
            </section>
            <section className='flex flex-row my-4 mx-1 gap-1'>
                <article className='flex-1 relative hover:cursor-pointer' onClick={() => { navigate('/men') }}>
                    <img src={men} className='w-full h-full object-cover object-top' />
                    <span className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white z-10">
                        Men
                    </span>
                </article>
                <article className='flex flex-col flex-1 justify-between'>
                    <section className='flex justify-around text-center mx-5 gap-4'>
                        <button className='relative' onClick={() => { navigate(`/categories/T-shirts/men`) }}>
                            <img src={menShirt} />
                            <span className='absolute inset-0 flex items-end justify-start font-extralight text-3xl z-10 p-1 hover:cursor-pointer'>TOPS</span>
                        </button>
                        <button className='relative' onClick={() => { navigate(`/categories/Pants/men`) }}>
                            <img src={menPants} />
                            <span className='absolute inset-0 flex items-end justify-start font-extralight text-3xl  z-10 p-1 hover:cursor-pointer'>BOTTOMS</span>
                        </button>
                    </section>
                    <span className='mx-5 underline-offset-2 text-lg underline hover:cursor-pointer' onClick={() => { navigate('/men') }}>View all</span>
                </article>
            </section>
            <section className='flex flex-row-reverse my-4 mx-1 gap-1'>
                <article className='flex-1 relative hover:cursor-pointer' onClick={() => { navigate('/women') }}>
                    <img src={women} className='w-full h-full object-cover object-top' />
                    <span className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white z-10">
                        Women
                    </span>
                </article>
                <article className='flex flex-col flex-1 justify-between'>
                    <section className='flex justify-around text-center mx-5 gap-4 h-2/3'>
                        <button className='relative' onClick={() => { navigate(`/categories/T-shirts/women`) }}>
                            <img src={womenShirt} className='h-full' />
                            <span className='absolute inset-0 flex items-end justify-start font-extralight text-3xl z-10 p-1 hover:cursor-pointer'>TOPS</span>
                        </button>
                        <button className='relative' onClick={() => { navigate(`/categories/Pants/women`) }}>
                            <img src={womenPants} className='h-full' />
                            <span className='absolute inset-0 flex items-end justify-start font-extralight text-3xl  z-10 p-1 hover:cursor-pointer'>BOTTOMS</span>
                        </button>
                    </section>
                    <span className='mx-5 underline-offset-2 text-lg underline hover:cursor-pointer' onClick={() => { navigate('/women') }}>View all</span>
                </article>
            </section>
        </main>
    )
}

export default Home