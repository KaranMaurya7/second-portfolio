import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            whileHover={{ y: -5, transition :{  duration: 0.1} }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: index * 0.1, duration: 0.5 }} 
            viewport={{ once: true }} 
            className="flex flex-col items-center justify-center p-4 text-white bg-slate-800 rounded-lg shadow-md hover:shadow-lg"
        >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <span className="mt-2 text-lg font-semibold">{skill.name}</span>
        </motion.div>
    );
};

export const Skills = ({skillsData} ) => {
    return (
        <section
            id="skills"
            className=" py-16 px-4 rounded-lg"
        >
            <h2 className="text-3xl font-bold text-center text-white mb-8">
                My Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-xl p-4 lg:p-0 lg:w-3/5 mx-auto">
                {skillsData.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
};
