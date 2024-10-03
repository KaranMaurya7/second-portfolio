import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"


export function Contact({ secContact, setSecContact }) {

    const [flipContactForm, setFlipContactForm] = useState(true);

    return (<>
    
        <AnimatePresence>

            {secContact &&
                <motion.div initial={{ y: '100vw', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} exit={{ y: '100vw', opacity: 0 }}
                    id="contact" className="w-full h-[87%]  overflow-scroll fixed top-[12%] left-0 bg-gray-400 rounded-3xl z-10 p-5">

                    <h1 className=" text-2xl text-black text-center font-bold m-auto p-3">Want To Stay Connected!</h1>

                    <div className="w-full md:w-[60%] lg:w-[35%] px-4  m-auto flex flex-row justify-between items-center">

                        <h2 className="text-black font-semibold text-lg"> Contact Us {flipContactForm ? 'Form' : 'Details'} </h2>

                        {/* flip button  */}
                        <img onClick={() => setFlipContactForm(!flipContactForm)} className="w-5 cursor-pointer h-5" src="https://cdn-icons-png.flaticon.com/128/318/318275.png" alt="next" />
                    </div>

                    <div className=" w-full h-full rounded-2xl m-auto lg:p-5  ">

                        <AnimatePresence>

                            {flipContactForm ?
                                <motion.form 
                                initial={{ rotateX: 180, opacity:0 }} animate={{ rotateX: 0,opacity:1 }} transition={{duration:0.5}} exit={{ rotateX: 180,opacity:0}}
                                
                                className="flex bg-gray-300 shadow-xl flex-col mt-0 p-10 rounded-xl gap-6 w-full md:w-[60%] lg:w-[35%] m-auto">
                                    <input type="name" name="name" id="name" className="w-full shadow-md h-10 p-3 outline-none bg-white rounded-lg text-black" placeholder="Full Name" />

                                    <input type="email" name="email" id="email" className="w-full shadow-md h-10 p-3 outline-none bg-white rounded-lg text-black" placeholder="Email" />

                                    <textarea name="mesaage" id="message" rows="10" className="w-full shadow-md h-36   p-3 outline-none bg-white rounded-lg text-black" placeholder="Type Your Message" ></textarea>

                                    <div className="flex justify-start">
                                        <button type="submit" className="shadow-lg bg-green-600 px-10 m-auto rounded-lg p-2"> Send </button>

                                    </div>
                                </motion.form>

                                :
                                <motion.div
                                initial={{ rotateX: 180, opacity:0 }} animate={{ rotateX: 0,opacity:1 }} transition={{duration:0.5}} exit={{ rotateX: 180,opacity:0}}className="flex font-semibold text-xl text-black bg-gray-300 shadow-xl flex-col mt-0 p-10 rounded-xl gap-6 w-full md:w-[60%] lg:w-[35%] m-auto">
                                    
                                    <div className="flex flex-wrap">
                                        <h1>Name :- </h1>
                                        <h1> Karan Maurya</h1>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <h1>Email :- </h1>
                                        <h1> bugscode07 @gmail.com</h1>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <h1>Contact :- </h1>
                                        <h1> +919876543210</h1>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <h1>LinkdeIn :-</h1>
                                        <a href="https://www.linkedin.com/in/karan-maurya-9b6b29259/" target="blank">Click here to Connect</a>
                                    </div>
                                    
                                </motion.div>
                            }

                        </AnimatePresence>

                    </div>

                </motion.div>
            }
        </AnimatePresence>

    </>)
}