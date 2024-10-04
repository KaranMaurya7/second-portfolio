import React from 'react';
import { motion, useScroll } from 'framer-motion';

const projectsData = [
  { title: 'Project One', description: 'Description of project one.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Two', description: 'Description of project two.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Three', description: 'Description of project three.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Four', description: 'Description of project four.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Five', description: 'Description of project five.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Six', description: 'Description of project six.', image: 'https://via.placeholder.com/300' },
];

export const Projects = () => {
  const scrollRef = React.useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
	<section id="projects" className="bg-slate-900 py-16 px-4 md:w-4/5 md:m-auto">
	  
		<motion.h2
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="text-4xl font-bold text-center text-white mb-12"
		>
			My Projects
		</motion.h2>

		{/* Horizontal Scroll Container */}
		<motion.div
			ref={scrollRef}
			className="max-w-full h-[400px] mx-auto overflow-x-scroll overflow-y-hidden flex gap-8 py-8 snap-x snap-mandatory scroll-smooth custom-scrollbar"
		>
			{projectsData.map((project, index) => (
			<motion.div
				key={index}
				className="min-w-[300px] sm:min-w-[75%] lg:min-w-[30%] bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition snap-center mx-4"
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
				<h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
				
				{/* Project Description */}
				<p className="text-gray-400 mb-4">{project.description}</p>
			</motion.div>
			))}
		</motion.div>

		{/* Optional Scroll Progress Indicator */}
		<motion.div
			className="h-1 bg-blue-500 rounded mt-8"
			style={{ scaleX: scrollXProgress }}
		/>
	</section>
  );
};
