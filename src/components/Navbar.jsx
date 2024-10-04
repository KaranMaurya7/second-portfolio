import React, { useState } from 'react';
import { motion } from 'framer-motion';
import resume from '../assets/Resume.pdf';

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	// Variants for Hamburger Icon Lines
	const topLineVariants = {
		open: { rotate: 45, y: 6, transition: { duration: 0.3 } },
		closed: { rotate: 0, y: 0, transition: { duration: 0.3 } },
	};

	const middleLineVariants = {
		open: { opacity: 0, transition: { duration: 0.3 } },
		closed: { opacity: 1, transition: { duration: 0.3 } },
	};

	const bottomLineVariants = {
		open: { rotate: -45, y: -6, transition: { duration: 0.3 } },
		closed: { rotate: 0, y: 0, transition: { duration: 0.3 } },
	};

	// Full-Screen Menu Variants (Sliding in from the Right)
	const menuVariants = {
		open: { x: 0, width: "100vw", transition: { duration: 0.5, ease: "easeInOut" } },
		closed: { x: "100vw", width: "100vw", transition: { duration: 0.5, ease: "easeInOut" } },
	};


	return (
		<nav className="w-full fixed top-0 left-0 bg-gray-900 text-white shadow-md z-20">
			{/* Main Container */}
			<div className="max-w-screen-xl lg:w-[80vw] mx-auto px-4 md:px-8 flex justify-between items-center h-20 transition-all duration-300 ease-in-out">

				{/* Right Side: Name */}
				<div className="font-bold text-3xl font-josefin z-10">Karan <span className='text-green-400'>Maurya</span></div>

				{/* Left Side: Menu Links (Hidden on smaller screens) */}
				<div className="hidden md:flex items-center space-x-8">
					
					<a href="#home" className="hover:text-green-300 hover:border-b-2 transition duration-300">Home</a>
					<a href="#about" className="hover:text-green-300 hover:border-b-2 transition duration-300">About</a>
					<a href="#projects" className="hover:text-green-300 hover:border-b-2 transition- duration-300">Projects</a>
					<a href="#contact" className="hover:text-green-300 hover:border-b-2 transition duration-300">Contact</a>
					
					<a href={resume} className="border p-3 rounded-sm flex flex-row gap-2 hover:bg-blue-900 transition-all" target='_blank' rel='noopener noreferrer'>
						Resume
						<i className="ri-file-download-fill hover:block"></i>
					</a>
				</div>

				{/* Mobile Menu Button with Framer Motion */}
				<button className="md:hidden focus:outline-none z-10" onClick={() => setMenuOpen(!menuOpen)}>
					<motion.div
						className="w-6 h-6 flex flex-col justify-between items-center"
						initial={false}
						animate={menuOpen ? "open" : "closed"}
					>
						{/* Hamburger Line 1 */}
						<motion.span
							className="block w-6 h-0.5 bg-white"
							variants={topLineVariants}
						/>

						{/* Hamburger Line 2 */}
						<motion.span
							className="block w-6 h-0.5 bg-white"
							variants={middleLineVariants}
						/>

						{/* Hamburger Line 3 */}
						<motion.span
							className="block w-6 h-0.5 bg-white"
							variants={bottomLineVariants}
						/>
					</motion.div>
				</button>
			</div>

			{/* Full-Screen Mobile Menu with Framer Motion (Sliding from the Right) */}
			<motion.div
				className="md:hidden fixed top-0 left-0 h-full bg-gray-900 text-white flex flex-col items-center justify-center space-y-8 text-xl pointer-events-auto"
				initial={false}
				animate={menuOpen ? "open" : "closed"}
				variants={menuVariants}
				style={{
					pointerEvents: menuOpen ? "auto" : "none",
				}}
			>

				<a href="#home" className="hover:text-gray-400 text-2xl transition duration-300" onClick={() => setMenuOpen(false)}>
					Home
				</a>

				<a href="#about" className="hover:text-gray-400 text-2xl transition duration-300" onClick={() => setMenuOpen(false)} >
					About
				</a>

				<a href="#projects" className="hover:text-gray-400 text-2xl transition duration-300" onClick={() => setMenuOpen(false)}>
					Projects
				</a>

				<a href="#contact" className="hover:text-gray-400 text-2xl transition duration-300" onClick={() => setMenuOpen(false)}>
					Contact
				</a>

				<a href={resume}  className="hover:text-gray-400 text-2xl transition duration-300" onClick={() => setMenuOpen(false)} target='_blank' rel='noopener noreferrer'>
					Resume
				</a>
			</motion.div>
		</nav>
	);
};

export default Navbar;
