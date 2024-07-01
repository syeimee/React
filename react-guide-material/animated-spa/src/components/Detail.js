import React from 'react';
import { motion } from 'framer-motion';
import './Detail.css';

function Detail() {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.5 }}
      className="detail"
    >
      <h1>Detail Page</h1>
      <p>This is the Detail Page.</p>
    </motion.div>
  );
}

export default Detail;
