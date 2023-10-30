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
      className='text-center flex text-6xl font-bold py-36 justify-center bg-[var(--background-light)]
      max-1250:text-5xl max-650:text-4xl max-500:text-3xl max-410:text-2xl max-350:text-xl max-500:py-14'
    >
      <div className='custom-text-animation'>
        Ambitious developer with <br />
        passion to build impressive user <br />
        experiences
      </div>
    </motion.div>
  );
};

export default ColorText;
