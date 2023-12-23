import { motion } from 'framer-motion';

export function Projects() {
    return (<>
        <section id="projects" className="w-full rounded-3xl py-16">
            <div  className="w-full rounded-xl md:shadow-lg  hover:scale-[1.01] transition-all lg:shadow-slate-800  m-auto  lg:w-[50vw] md:p-8 p-4" >

                <div id='carousel' className='flex rounded-lg shadow-slate-700  flex-row overflow-scroll gap-4'>
                    <img src='https://pyxis.nymag.com/v1/imgs/3b7/ca7/5fd3353737d602a5a1caa3fce92cb33b39-rick-morty.jpg' alt='imaeg' />
                    <img src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-10/231016-rick-and-morty-cs-7502c0.jpg' alt='imaeg' />
                    <img src='https://pyxis.nymag.com/v1/imgs/3b7/ca7/5fd3353737d602a5a1caa3fce92cb33b39-rick-morty.jpg' alt='imaeg' />
                </div>

            </div>
        </section>

    </>)
}