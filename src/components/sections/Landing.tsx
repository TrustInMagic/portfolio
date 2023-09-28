import React from 'react';
// next
import Image from 'next/image';
// components
import CustomButton from '../CustomButton';
// framer motion
import { motion, Variants } from 'framer-motion';
// ------------------------------------------------ //

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 120, transition: { duration: 0.3 } },
};

const Landing = () => {
  return (
    <motion.ul
      className='h-screen flex flex-col items-center justify-center gap-8'
      initial='closed'
      animate='open' 
      variants={{
        open: {
          clipPath: 'inset(0% 0% 0% 0% round 10px)',
          transition: {
            type: 'spring',
            bounce: 20,
            duration: 1,
            delayChildren: 0,
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.li variants={itemVariants}>
        <Image
          src='/assets/me.jpeg'
          alt='Tim'
          width={250}
          height={250}
          className='rounded-full'
        />
      </motion.li>
      <motion.li
        className='text-[var(--text-light)] text-2xl font-medium'
        variants={itemVariants}
      >
        Tim Ionescu
      </motion.li>
      <motion.li
        className='text-7xl font-bold text-[var(--text-dark)]'
        variants={itemVariants}
      >
        Software Engineer
      </motion.li>
      <motion.li
        className='text-sm text-[var(--text-light)] text-center max-w-[450px] flex'
        variants={itemVariants}
      >
        I believe in inventive processes & continuous learning. I perpetually
        have a curiosity for discovering new best practices and workflows.
      </motion.li>
      <motion.li variants={itemVariants}>
        <CustomButton content='Find out more ->' size='large' />
      </motion.li>
    </motion.ul>
  );
};

export default Landing;
