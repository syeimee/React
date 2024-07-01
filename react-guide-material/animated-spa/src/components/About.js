import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Page</h2>
      <p>This is the About Page.</p>
    </motion.div>
  );
}

export default About;
