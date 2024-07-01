import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Page</h2>
      <p>Get in touch with us through the Contact Page.</p>
    </motion.div>
  );
}

export default Contact;
