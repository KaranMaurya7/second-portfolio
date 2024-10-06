import React from 'react';
import { motion } from 'framer-motion';

export const Footer = ({userData}) => {
    return (
        <footer className="bg-gray-950 py-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <div className="flex mt-4 flex-row gap-6">
                    <a href={userData.linkedIn} target='_blank' rel='noopener noreferrer'>
                        <img className='w-8 hover:shadow-sm hover:shadow-green-200 transition-all' src='https://cdn-icons-png.flaticon.com/128/3991/3991775.png' alt='LinkedIn logo' />
                    </a>
                    <a href={userData.github} target='_blank' rel='noopener noreferrer'>
                        <img className='w-8 hover:shadow-sm hover:shadow-green-200 transition-all brightness-0 invert' src='https://cdn-icons-png.flaticon.com/128/25/25657.png' alt='GitHub logo' />
                    </a>
                    <a href={`mailto:${userData.emailId}`} target='_blank' rel='noopener noreferrer'>
                        <img className='w-8 hover:shadow-sm hover:shadow-green-200 transition-all' src='https://cdn-icons-png.flaticon.com/128/893/893247.png' alt='Email logo' />
                    </a>
                    <a href={userData.instaId} target='_blank' rel='noopener noreferrer'>
                        <img className='w-8 hover:shadow-sm hover:shadow-green-200 transition-all' src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png' alt='Instagram logo' />
                    </a>
                </div>
                <p className="text-white mt-4">
                    © {new Date().getFullYear()} All Rights Reserved
                </p>
            </motion.div>
        </footer>
    );
};
