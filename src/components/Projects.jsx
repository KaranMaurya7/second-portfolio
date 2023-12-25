import todo from '../assets/todo.png'
import porfolio from '../assets/portfolio.png'
import catchme from '../assets/catchmegame.png'
import ecom from '../assets/ecommerce.png'
import movie from '../assets/Moviflix.png'
import { useState } from 'react'

import { motion } from 'framer-motion';


export function Projects() {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4])

    const handleNext = () => {
        setPositionIndex((prev) => {
            const updateIndex = prev.map((prev) => (prev + 1) % 5);
            return updateIndex;
        })
    }
    const imageContainer = [porfolio, ecom, catchme, todo, movie];

    const position = ['center', 'left1', 'left', 'right', 'right1'];

    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-50%', scale: 0.7, zIndex: 2 },
        left: { y: '-10%', scale: 0.5, zIndex: 1 },
        right: { y: '-10%', scale: 0.5, zIndex: 1 },
        right1: { x: '50%', scale: 0.7, zIndex: 2 }
    }

    return (<>
        <section id="projects" className="w-full rounded-3xl py-16">

            <h1 className="text-center p-8 rounded-lg mb-4 bg-violet-950 shadow-md shadow-slate-700 opacity-80 text-3xl m-auto w-[90vw] lg:w-[50vw]"> Projects </h1>

            <div className='w-full md:w-[75vw] m-auto -mt-24 ' >
                <div className='flex items-center flex-col justify-center h-screen  '>
                    {imageContainer.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt='Project Screenshot'
                            className='rounded-[12px]'
                            initial='center'
                            animate={position[positionIndex[index]]}
                            variants={imageVariants}
                            transition={{ duration: 0.5 }}
                            style={{ width: '50%', position: 'absolute' }}
                        />
                    ))}
                    <div className=' w-full md:w-[50Vw] flex justify-evenly'>
                        <a href='https://github.com/KaranMaurya7' rel="noreferrer" target = '_blank' className='text-white mt-[500px] cursor-pointer bg-green-600 rounded-md py-2 px-4'>Github</a>
                        <button className='text-white mt-[500px] bg-indigo-400 rounded-md py-2 px-4' onClick={handleNext}>Next Project</button>
                    </div>
                </div>
            </div>

        </section>

    </>)
}