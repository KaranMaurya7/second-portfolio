import { motion } from "framer-motion"


export function Transition() {
    return (<>

        <motion.div className="fixed flex justify-center items-center w-screen z-50 h-screen top-0 bottom-0 bg-slate-800"
            initial={{ rotate: 0, scale: 1, width: '100%' }}
            animate={{ rotate: 180, scale: 0.3, width: 0 }}
            transition={{ delay: 2.5, duration: 0.8, ease: 'easeInOut' }}>

            <motion.h1 initial={{ opacity: 1 ,x:0}} animate={{ opacity: 0,x:-'100vw' }} transition={{ delay:2,duration:0.3 }}

                className="text-white  font-semibold text-3xl text-center">
                <code>{'< Hello world />'}</code>

            </motion.h1>

        </motion.div>

        <motion.div className="fixed w-screen z-40 h-screen top-0 bottom-0 bg-slate-600"
            initial={{ rotate: 0, scale: 1, width: '100%' }}
            animate={{ rotate: 180, scale: 0.3, width: 0 }}
            transition={{ delay: 2.55, duration: 0.8, ease: 'easeInOut' }}/>

        <motion.div className="fixed w-screen z-30 h-screen top-0 bottom-0 bg-slate-400"
            initial={{ rotate: 0, scale: 1, width: '100%' }}
            animate={{ rotate: 180, scale: 0.3, width: 0 }}
            transition={{ delay: 2.6, duration: 0.8, ease: 'easeInOut' }}/>

    </>)
} 