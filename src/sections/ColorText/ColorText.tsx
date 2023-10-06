import React from 'react';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

const ColorText = () => {
  return (
    <motion.div
      initial={{
        y: 300,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.5,
          duration: 0.8,
        },
      }}
      viewport={{ once: true }}
      className='text-center flex text-6xl font-bold py-56 justify-center 
      bg-[var(--background-light)]'
    >
      <div className='custom-text-animation'>
        Ambitious developer with a <br />
        passion to build impressive user <br />
        experiences
      </div>
    </motion.div>
  );
};

export default ColorText;
