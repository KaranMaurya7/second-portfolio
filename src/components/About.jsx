import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  left: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  },
  right: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-800 p-6  rounded-lg w-full text-white py-10 transition-all overflow-hidden">

      <div className="max-w-screen relative mx-auto px-4 lg:w-3/4 m-auto ">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

        {/* Central line */}
        <div className="border absolute top-28 left-1/2 hidden md:inline border-white w-0 h-4/5"></div>

        {/* Life journey content */}
        <div className="flex flex-col gap-8">
          {/* Experience Section */}
          <motion.div
            className="w-full flex justify-start md:pr-8"
            initial="initial"
            whileInView="animate"
            variants={sectionVariants.left}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full md:w-1/2 h-full bg-slate-900 rounded-lg shadow-md p-8 hover:shadow-slate-700 hover:-translate-y-2 duration-200 transition-all">
              <h3 className="text-2xl underline font-semibold mb-4">Experience</h3>
              <div className="flex flex-col gap-2">
                <div>
                  <span className=" font-semibold block">Junior Software Engineer</span>
                  <span className="font-semibold text-sm">@ Jupitice Justice Technologies Private Limited</span>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Implemented Razorpay webhook authentication ensuring secure and reliable payment processing.</li>
                  <li>Developed a feature to generate QR codes with necessary details using third-party libraries.</li>
                  <li>Engineered a redirection mechanism from another platform to our platform.</li>
                  <li>Contributed to integrating data visualization components into products using third-party libraries, enhancing data presentation and user insights.</li>
                  <li>Managed and fulfilled data requests from various departments, providing data in diverse formats such as graphs, charts, pie charts, and heatmaps.</li>
                  <li>Extracted, manipulated, and analyzed raw data from databases using SQL.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className=" w-full flex justify-end md:pl-8"
            initial="initial"
            whileInView="animate"
            variants={sectionVariants.right}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full md:w-1/2 h-full bg-slate-900 rounded-lg p-8 shadow-md hover:shadow-slate-700 hover:-translate-y-2 duration-200 transition-all">
              <h3 className="text-2xl underline font-semibold mb-4">Certificates</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://certificate.codingninjas.com/view/f67cbc71b2493d1a" className=" hover:underline" target="_blank" rel="noopener noreferrer">Front-End Web Development (HTML, CSS, JavaScript) Certificate</a></li>
                <li><a href="https://certificate.codingninjas.com/view/7e97599fdbfec9d3" className=" hover:underline" target="_blank" rel="noopener noreferrer">Back End | Node.js Certificate</a></li>
                <li><a href="https://certificate.codingninjas.com/view/f67cbc71b2493d1a" className="hover:underline" target="_blank" rel="noopener noreferrer">Frontend Library | React.js Certificate</a></li>
                <li><a href="https://certificate.codingninjas.com/view/6f9d2a3f7e73164a" className=" hover:underline" target="_blank" rel="noopener noreferrer">Data Structures and Algorithm in Java Certificate</a></li>
                <li><a href="https://certificate.codingninjas.com/view/417647aa0c65b299" className=" hover:underline" target="_blank" rel="noopener noreferrer">Core Java Certificate</a></li>
              </ul>
            </div>
          </motion.div>

          {/* Courses Section */}
          <motion.div
            className=" w-full flex justify-start md:pr-8"
            initial="initial"
            whileInView="animate"
            variants={sectionVariants.left}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full md:w-1/2 h-full bg-slate-900 rounded-lg p-8 shadow-md hover:shadow-slate-700 hover:-translate-y-2 duration-200 transition-all">
              <h3 className="text-2xl font-semibold underline mb-4">Courses</h3>
              <p className="text-gray-300 mb-4">
                These courses have strengthened my understanding of full-stack development and core programming concepts, focusing on building dynamic and robust web applications using the MERN stack and mastering the fundamentals of Java.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Node.js, Express, MongoDB & More</li>
                <li>React - The Complete Guide (incl. Hooks, React Router, Redux)</li>
                <li>Java Programming Masterclass covering Java </li>
                <li>Data Structures and Algorithms in Java</li>
              </ul>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="w-full flex justify-end md:pl-8"
            initial="initial"
            whileInView="animate"
            variants={sectionVariants.right}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full md:w-1/2 h-full bg-slate-900 rounded-lg p-8 shadow-md hover:shadow-slate-700 hover:-translate-y-2 duration-200 transition-all">
              <h3 className="text-2xl underline font-semibold mb-4">Education</h3>
              <p className="text-gray-300 mb-4">
                I hold a Bachelor's degree in Science with a focus on non-medical subjects. During my academic journey, I gained a strong foundation in analytical thinking and problem-solving, which I now apply in my software engineering work.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Bachelor of Science (Non-Medical)</strong> – Panjab University, Chandigarh | 60% (July 2017 - Sept 2020)</li>
                <li>Completed multiple online certifications in full-stack development, MERN stack, and core Java programming.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
