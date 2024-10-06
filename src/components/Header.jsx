import profile from '../assets/3DMENOBG.png';
import resume from '../assets/Resume.pdf';
import { motion } from 'framer-motion';

const animate = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 3.5, // Shortened delay for smoother entrance
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const imageAni = {
	initial: { opacity: 0, rotateX: 0 },
	animate: {
		opacity: 1,
		transition: {
			delay: 3.5, // Shortened delay for smoother entrance
			duration: 1,
		},
	},
};

export function Header({userData}) {
	return (
		<div
			id='home'
			className='w-full flex flex-col lg:flex-row h-full bg-gray-900 p-6 pt-20 lg:m-auto lg:w-[75vw] lg:pt-[8%]'
		>
			{/* Mobile view: Profile Image */}
			<motion.div
				variants={imageAni}
				initial='initial'
				animate='animate'
				className='w-full lg:hidden md:w-[70%] md:m-auto'
			>
				<img
					className='duration-300 transition-all rounded-[30%]'
					src={profile}
					alt='Karan Maurya'
				/>
			</motion.div>

			{/* Text Content */}
			<div className='text-left p-4 flex flex-col justify-center w-full lg:w-1/2'>
				<motion.h2
					variants={animate}
					initial='initial'
					animate='animate'
					className='text-[1.8rem] lg:text-[2rem]'
				>
					Hi, it's{' '}
					<span className='font-bold font-josefin text-green-300 hover:border-b-2'>
					{userData.firstName+` ` + userData.lastName}
					</span>
				</motion.h2>

				<motion.h3
					variants={animate}
					initial='initial'
					animate='animate'
					className='text-[1.2rem] lg:text-[1.5rem] '
				>
				  I am a <span className='text-cyan-300'>{userData.currentPosition}</span>
				</motion.h3>

				<h4 className='text-green-500 text-[1rem] mt-1 lg:text-[1rem]'>
					{userData.headline}
				</h4>

				<p className='pt-3 text-justify'>
					Hey there! Welcome to my portfolio. I’m a Junior Software Engineer who loves creating web applications with Node.js, React.js, and MongoDB. Feel free to check out my projects and see how I turn ideas into reality.
				</p>

				{/* Social Icons */}
				<div className='flex mt-4 flex-row gap-6'>
					<a href={userData.linkedIn} target='_blank' rel='noopener noreferrer'>
						<img className='w-8' src='https://cdn-icons-png.flaticon.com/128/3991/3991775.png' alt='LinkedIn logo' />
					</a>
					<a href={userData.github} target='_blank' rel='noopener noreferrer'>
						<img className='w-8 brightness-0 invert' src='https://cdn-icons-png.flaticon.com/128/25/25657.png' alt='GitHub logo' />
					</a>
					<a href={`mailto:${userData.emailId}`} target='_blank' rel='noopener noreferrer'>
						<img className='w-8' src='https://cdn-icons-png.flaticon.com/128/893/893247.png' alt='Email logo' />
					</a>
					<a href={userData.instaId} target='_blank' rel='noopener noreferrer'>
						<img className='w-8' src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png' alt='Instagram logo' />
					</a>
				</div>

				<button className='text-lg hover:scale-95 hover:shadow-[5px_4px_5px_1px_rgba(0,0,0,0.5)] hover:shadow-black transition-all shadow-[10px_8px_10px_2px_rgba(0,0,0,0.5)] m-0 border w-[8rem] h-12 my-6'>
					<a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a>
				</button>
				
			</div>

			{/* Desktop view: Profile Image */}
			<motion.div
				variants={imageAni}
				initial='initial'
				animate='animate'
				className='hidden lg:inline-block lg:w-1/2 md:w-[70%] md:m-auto'
			>
				<img
					className='duration-300 transition-all rounded-[30%]'
					src={profile}
					alt='Karan Maurya'
				/>
			</motion.div>
		</div>
	);
}
