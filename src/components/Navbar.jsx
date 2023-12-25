
export function Navbar({ secContact, setSecContact }) {
    return (<>
        <nav className='fixed duration-300 transition-all left-[1vw] shadow-md top-[89vh] w-[98%] m-auto rounded-xl bg-white p-2 py-5 opacity-80  md:w-1/2 z-20 md:left-1/4 lg:left-[20%] lg:top-4 lg:h-16 lg:w-[60%]'>
            <ul className='flex h-full px-2 flex-row justify-evenly  lg:flex-row'>

                <li className=' cursor-pointer duration-300 transition-all '>
                    <a href = '#home'>
                        <img className='w-6 hover:scale-[1.2] lg:hidden inline  cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/2626/2626863.png' alt='icon' />
                        <span className="hidden ml-3  hover:border-b-2  border-black lg:inline font-semibold text-xl">Home</span>
                    </a>
                </li>
                <li className=' cursor-pointer duration-300 transition-all bottom-1'>
                    {/* eslint-disable-next-line */}

                    <a href='#projects'>
                        <img className='w-6 hover:scale-[1.2] lg:hidden inline cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/1545/1545205.png' alt='icon' />
                        <span className="hidden ml-3  hover:border-b-2  border-black lg:inline font-semibold text-xl">About</span>
                    </a>
                </li>
                <li className=' cursor-pointer duration-300 transition-all'>
                    {/* eslint-disable-next-line */}
                    <a href='#projects'>
                        <img className='w-6 hover:scale-[1.2] lg:hidden inline cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/408/408557.png' alt='icon' />
                        <span className="hidden hover:border-b-2  border-black ml-3 lg:inline font-semibold text-xl">Projects</span>
                    </a>
                </li>

                <li onClick={() => setSecContact(!secContact)} className=' cursor-pointer duration-300 transition-all'>
                    {/* eslint-disable-next-line */}

                    <img className='w-6 hover:scale-[1.2] lg:hidden inline cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/3193/3193015.png' alt='icon' />
                    <span className="hidden  hover:border-b-2  border-black ml-3 lg:inline font-semibold text-xl">Contact</span>

                </li>
                <li className=' cursor-pointer duration-300 transition-all'>
                    {/* eslint-disable-next-line */}
                    <a href='#projects'>
                        <img className='w-6 hover:scale-[1.2] lg:hidden inline cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/1091/1091007.png' alt='icon' />
                        <span className="hidden  hover:border-b-2  border-black ml-3 lg:inline font-semibold text-xl">Resume</span>
                    </a>
                </li>
            </ul>

        </nav>
    </>)
}