import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const Projects = ({ projectsData }) => {
	const scrollRef = React.useRef(null);
	const { scrollXProgress } = useScroll({ container: scrollRef });

	return (
		<section id="projects" className="bg-slate-800 rounded-lg py-16 px-4">

			{/* Projects Header */}
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-4xl font-bold text-center text-white mb-12"
			>
				My Projects
			</motion.h2>

			{/* Swipe Instruction */}
			<div className='w-full md:w-4/5 m-auto px-10 flex items-center justify-start'>
				<span className="text-2xl text-center text-white">Swipe to see more</span>
				<i className="ri-arrow-right-line text-2xl ml-8 text-white"></i>
			</div>

			{/* Horizontal Scroll Container */}
			<motion.div
				ref={scrollRef}
				className="max-w-full h-[450px] mx-auto overflow-x-scroll lg:w-4/5 md:m-auto overflow-y-hidden flex gap-8 py-8 snap-x snap-mandatory scroll-smooth custom-scrollbar"
			>
				{/* Project Cards */}
				{projectsData.map((project, index) => (
					<motion.div
						key={index}
						className="min-w-[300px] sm:min-w-[80%] md:min-w-[40%] lg:min-w-[30%] bg-slate-950 p-6 rounded-lg shadow-md hover:-translate-y-3 hover:shadow-slate-700 transition snap-center mx-4 overflow-hidden"
						initial={{ opacity: 0.5 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						{/* Project Image */}
						<motion.img
							src={project.image}
							alt={project.title}
							whileHover={{ scale: 1.05 }} // Add a hover effect to scale up the image slightly
							transition={{ type: 'spring', stiffness: 300 }}
							className="w-full h-48 rounded-lg mb-4 object-cover"
						/>

						{/* Project Title */}
						<h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>

						{/* Project Links */}
						<div className='mt-6 flex  gap-4 sm:flex-row sm:justify-start'>
							{/* Project Demo Link */}
							{project.link && (
								<a 
									href={project.link} 
									target='_blank' 
									rel='noopener noreferrer' 
									className='w-full sm:w-32 bg-blue-700 py-2 px-4 rounded text-center text-white hover:bg-blue-800 transition duration-300'
								>
									Live Demo
								</a>
							)}
							
							{/* Project Source Code Link */}
							{project.sourceCode && (
								<a 
									href={project.sourceCode} 
									target='_blank' 
									rel='noopener noreferrer' 
									className='w-full sm:w-32 bg-gray-700 py-2 px-4 rounded text-center text-white hover:bg-gray-800 transition duration-300'
								>
									Source Code
								</a>
							)}

							
						</div>

						{/* Technology Tags */}
						<div className='w-full flex flex-wrap gap-2 mt-2 overflow-hidden'>
							{project.technologyUsed.map((tech, i) => (
								<span key={i} className='bg-green-700 text-white px-2 py-1 rounded text-sm'>
									{tech}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Optional Scroll Progress Indicator */}
			<motion.div
				className="h-1 bg-blue-500 rounded mt-8 mx-4 md:mx-20"
				style={{ scaleX: scrollXProgress }}
			/>
		</section>
	);
};
