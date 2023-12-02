import { AnimatePresence, motion } from "framer-motion"


export function Contact({ secContact, setSecContact }) {
    return (<>
        <AnimatePresence>

            {secContact &&
                <motion.div initial={{ y: '100vw', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} exit={{ y: '100vw', opacity: 0 }}
                    className="w-full h-[87%]  overflow-scroll fixed top-[12%] left-0 bg-gray-400 rounded-3xl z:20 p-5">
                    <h1 className=" text-2xl text-black text-center font-bold m-auto p-3">Want To Stay Connected!</h1>
                    <div className="w-full md:w-[60%] lg:w-[35%] px-4  m-auto flex flex-row justify-between items-center">
                        <h2 className="text-black font-semibold text-lg"> Contact Us Form </h2>
                        <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/318/318275.png" alt="next"/>
                    </div>

                    <div className=" w-full h-full rounded-2xl m-auto p-5  flex ">

                        <form className="flex bg-gray-300 shadow-xl flex-col mt-0 p-10 rounded-xl gap-6 w-full md:w-[60%] lg:w-[35%] m-auto">
                            <input type="name" name="name" id="name" className="w-full shadow-md h-10 p-3 outline-none bg-white rounded-lg text-black" placeholder="Full Name" />

                            <input type="email" name="email" id="email" className="w-full shadow-md h-10 p-3 outline-none bg-white rounded-lg text-black" placeholder="Email" />

                            <textarea name="mesaage" id="message" rows="10" className="w-full shadow-md h-36   p-3 outline-none bg-white rounded-lg text-black" placeholder="Type Your Message" ></textarea>

                            <div className="flex justify-start">
                                <button type="submit" className="shadow-lg bg-green-600 px-10 m-auto rounded-lg p-2"> Send </button>
                                <button type="reset" className=" shadow-lg bg-red-600 px-10 m-auto rounded-lg p-2"> Reset</button>
                            </div>
                        </form>


                    </div>

                </motion.div>
            }
        </AnimatePresence>

    </>)
}