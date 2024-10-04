import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const formFieldVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server)
        console.log('Form submitted:', formData);
        // Reset form data
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    return (
        <section id="contact" className=" pt-16 p-4 pb-24 rounded-lg">
            <motion.h2
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                className="text-3xl font-bold text-center text-white mb-8"
                viewport={{ once: true }} // Animate once when in view
            >
                Contact Me
            </motion.h2>

            <div className="max-w-screen-md mx-auto flex flex-col md:flex-row ">
                {/* Left Side - Form Fields */}
                <motion.div
                    className="md:w-1/3 p-4 bg-slate-800 rounded md:rounded-s-lg shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} // Animate once when in view
                >
                    <motion.div
                        variants={formFieldVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <label className="block text-white mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none"
                            placeholder="Your Name"
                        />
                    </motion.div>

                    <motion.div
                        variants={formFieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.1 }}
                    >
                        <label className="block text-white mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none"
                            placeholder="Your Email"
                        />
                    </motion.div>

                    <motion.div
                        variants={formFieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <label className="block text-white mb-2">Phone No</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none"
                            placeholder="Your Phone Number"
                        />
                    </motion.div>

                    <motion.div
                        variants={formFieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.3 }}
                    >
                        <label className="block text-white mb-2">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none"
                            placeholder="Subject"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Side - Message */}
                <motion.div
                    className="md:w-2/3 rounded md:rounded-e-lg shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} // Animate once when in view
                >
                    <motion.textarea
                        className="w-full h-full p-4 bg-gray-700 rounded focus:outline-none mb-4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="10"
                        placeholder="Your Message"
                        variants={formFieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.1 }}
                    ></motion.textarea>

                    <motion.button
                        className="w-full p-2 bg-blue-600 rounded hover:bg-blue-500 transition"
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};
