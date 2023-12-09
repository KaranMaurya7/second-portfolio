import {motion} from 'framer-motion';

export function Projects() {
    return (<>
        <section id="projects" className="w-full rounded-3xl p-4 pt-16 bg-slate-800">
            <motion.h1 
           
            className="text-center p-8 rounded-lg mb-4 bg-violet-950 shadow-md shadow-slate-700 opacity-80 text-3xl m-auto w-full lg:w-[50vw]">Skills</motion.h1>
            <div className="w-full m-auto flex flex-wrap gap-[1.5rem] flex-row lg:w-[50vw]  ">

                <div className="md:w-72 w-72 m-auto md:h-48 h-48 flex justify-center items-center cursor-pointer hover:scale-105 hover:shadow-lg bg-gray-700 p-3 hover:shadow-gray-700  transition-all rounded-lg "> Java </div>
                <div className="md:w-48 w-72 m-auto md:h-48 h-48 flex justify-center items-center cursor-pointer hover:scale-105 hover:shadow-lg bg-gray-700 p-3 hover:shadow-gray-700  transition-all rounded-lg "> SQL </div>
                <div className="md:w-48 w-72 m-auto md:h-48 h-48 flex justify-center items-center cursor-pointer hover:scale-105 hover:shadow-lg bg-gray-700 p-3 hover:shadow-gray-700  transition-all rounded-lg "> HTML</div>
                <div className="md:w-48 w-72 m-auto md:h-48 h-48 flex justify-center items-center cursor-pointer hover:scale-105 hover:shadow-lg bg-gray-700 p-3 hover:shadow-gray-700  transition-all rounded-lg "> CSS </div>
                <div className="md:w-72 w-72 m-auto md:h-48 h-48 flex justify-center items-center cursor-pointer hover:scale-105 hover:shadow-lg bg-gray-700 p-3 hover:shadow-gray-700  transition-all rounded-lg "> Java Script </div>

                <div className="md:w-48 w-72 m-auto md:h-48 h-48 flex justify-center items-center cursor-pointer hover:scale-105 hover:shadow-lg bg-gray-700 p-3 hover:shadow-gray-700  transition-all rounded-lg "> React </div>


            </div>
        </section>
    </>)
}