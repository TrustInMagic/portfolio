import React from 'react';
// next
import Image from 'next/image';
// components
import CustomButton from '@/components/CustomButton/CustomButton';
// framer motion
import { motion, Variants } from 'framer-motion';
// ------------------------------------------------ //

interface LandingProps {
  moreRef: React.RefObject<HTMLDivElement>;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 120, transition: { duration: 0.3 } },
};

const Landing: React.FC<LandingProps> = ({ moreRef }) => {
  const handleClick = () => {
    if (moreRef) {
      moreRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            bounce: 0.4,
            duration: 1,
            delayChildren: 0,
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.li variants={itemVariants} className='-mt-[15%]'>
        <Image
          src='/assets/me.jpeg'
          alt='Tim'
          width={250}
          height={250}
          className='rounded-full'
          priority
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
        I am very curious and hungry to constantly learn. I strive to always improve
        myself and the work that I do by researching new technologies and workflows.
      </motion.li>
      <motion.li variants={itemVariants}>
        <CustomButton
          content='Find out more ->'
          size='large'
          onClick={handleClick}
        />
      </motion.li>
    </motion.ul>
  );
};

export default Landing;
