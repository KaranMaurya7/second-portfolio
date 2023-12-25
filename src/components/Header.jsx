import profile from '../assets/Me.png'
import { motion } from 'framer-motion';

const animate = {
    initial: {
        y: -20, opacity: 0
    },
    animate: {
        y: 0, opacity: 1,
        transition: {
            delay: 3,
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
}
const imageAni = {
    initial: { opacity: 0, rotateX:0},
    animate: {
        opacity: 1,
        transition: {
            delay: 3,
            duration: 1,

        }
    },

}

export function Header() {
    return (<>
        <div id = 'home' className='w-full duration-300 transition-all  flex flex-row flex-wrap h-full bg-gray-900 p-6 pt-20 py-16  lg:m-auto lg:w-[70vw] lg:pt-[8%]'>

            <motion.div
                variants={imageAni} initial='initial' animate='animate' 
                className='w-full lg:w-1/2 md:w-[70%] md:m-auto'>
                <img className='duration-300 transition-all  rounded-full shadow-md shadow-cyan-800  hover:shadow-sm ' src={profile} alt='displayPic' />
            </motion.div>

            <div className='text-center pt-5 flex flex-col justify-center w-full lg:w-1/2'>
                <motion.h2
                    variants={animate} initial='initial' animate='animate'
                    className=' text-[1.8rem] lg:text-[2rem]'>Hi, I am <span className='font-bold text-green-300 border-b-2'>Karan Maurya</span></motion.h2>
                <motion.h3
                    variants={animate} initial='initial' animate='animate'
                    className='  text-[1.8rem] lg:text-[2rem] '> Web Developer</motion.h3>

                <p className=' pt-3 lg:px-10 text-justify'>
                    As a skilled and passionate web developer, I am dedicated to turning ideas into innovative and user-friendly web applications. Explore my various projects showcasing my skills in web development.
                </p>

                <button className='text-lg hover:scale-95 hover:shadow-[5px_4px_5px_1px_rgba(0,0,0,0.5)] hover:shadow-black transition-all shadow-[10px_8px_10px_2px_rgba(0,0,0,0.5)]  m-0 border w-[8rem] h-12 my-6  lg:mx-10'>
                    <a href='./Karan Maurya .pdf' target='_blank'>Resume</a>
                </button>
                <div className='lg:mx-10 flex flex-row gap-6'>
                    <a href='https://www.linkedin.com/in/karan-maurya-9b6b29259/' target = '_blank'>
                        <img  className='w-8' src='https://cdn-icons-png.flaticon.com/128/3991/3991775.png' alt= 'logo' />
                    </a>
                    <a href='https://github.com/KaranMaurya7' target = '_blank'>
                        <img  className='w-8 brightness-0 invert' src='https://cdn-icons-png.flaticon.com/128/25/25657.png' alt= 'logo'/>
                    </a>
                    <a href='mailto:karanmaurya115@gmail.com' target = '_blank'>
                        <img  className='w-8' src='https://cdn-icons-png.flaticon.com/128/893/893247.png' alt= 'logo'/>
                    </a>
                    <a href='https://www.instagram.com/_bugs__bunny___/?hl=en' target = '_blank'>
                        <img  className='w-8' src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png' alt= 'logo'/>
                    </a>
                </div>

            </div>
        </div>
    </>)
}