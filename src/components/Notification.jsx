import React from "react";
import { motion } from "framer-motion";

export const Notification = ({ message, type }) => {
  if (!message) return null; // If no message, don't render anything

  const baseClasses =
    "p-4 mb-4 text-xs fixed top-5 right-5 rounded-sm flex items-center justify-center max-w-sm z-50"; 
  const typeClasses = {
    success: "bg-green-100 text-green-800 border border-green-300",
    error: "bg-red-100 text-red-800 border border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    info: "bg-blue-100 text-blue-800 border border-blue-300",
  };

  const slideInVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  };

  return (
    <motion.div
      className={`${baseClasses} ${typeClasses[type] || typeClasses.info}`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideInVariants}
      transition={{ duration: 0.3 }} 
    >
      <span>{message}</span>
    </motion.div>
  );
};
