import React from 'react';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

const AboutMe = () => {
  const initial = { y: 100, opacity: 0 };
  const appear = {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.2,
    },
  };

  return (
    <div className='flex flex-col py-36'>
      <div>
        <motion.div
          initial={initial}
          whileInView={appear}
          viewport={{ once: true }}
          className='text-2xl font-semibold text-[var(--text-light)]'
        >
          About Me
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={appear}
          viewport={{ once: true }}
          className='mt-4 font-bold text-6xl text-[var(--text-dark)]'
        >
          My tech stack and expertise
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
