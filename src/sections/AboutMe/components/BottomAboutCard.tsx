import React from 'react';
// next
import Image from 'next/image';
// theme
import { useTheme } from '@/providers/ThemeProvider';
// framer motion
import { motion, Variants } from 'framer-motion';
// ------------------------------------------------ //

const itemVariants: Variants = {
  open: {
    scale: 1,
    transition: { type: 'spring', stiffness: 600, damping: 25 },
  },
  closed: { scale: 0 },
};

const BottomAboutCard = () => {
  const { theme } = useTheme()!;

  return (
    <div className='flex gap-6'>
      <div className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6'>
        <div className='text-xl font-semibold text-[var(--text-dark)]'>
          Clean Code
        </div>
        <Image
          src={
            theme === 'light'
              ? '/assets/clean-code.png'
              : '/assets/clean-code-dark.png'
          }
          alt='Clean Code'
          className='mt-6'
          width={900}
          height={900}
        />
      </div>
      <motion.ul
        className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6'
        initial='closed'
        whileInView='open'
        viewport={{ once: true }}
        variants={{
          open: {
            transition: {
              staggerChildren: 0.28,
            },
          },
        }}
      >
        <div className='text-xl font-semibold text-[var(--text-dark)]'>
          Performance Optimization
        </div>
        <div className='text-sm text-[var(--text-light)]'>
          via Google Lighthouse
        </div>
        <div className='mt-10 gap-12 grid grid-cols-4'>
          <motion.li
            className='flex flex-col items-center gap-3'
            variants={itemVariants}
          >
            <Image
              src='/assets/lighthouse-100.png'
              alt=''
              width={900}
              height={900}
            />
            <div className='text-center text-[var(--text-light)]'>
              Performance
            </div>
          </motion.li>
          <motion.li
            className='flex flex-col items-center gap-3'
            variants={itemVariants}
          >
            <Image
              src='/assets/lighthouse-97.png'
              alt=''
              width={900}
              height={900}
            />
            <div className='text-center text-[var(--text-light)]'>
              Accessibility
            </div>
          </motion.li>
          <motion.li
            className='flex flex-col items-center gap-3'
            variants={itemVariants}
          >
            <Image
              src='/assets/lighthouse-100.png'
              alt=''
              width={900}
              height={900}
            />
            <div className='text-center text-[var(--text-light)]'>
              Best Practices
            </div>
          </motion.li>
          <motion.li
            className='flex flex-col items-center gap-3'
            variants={itemVariants}
          >
            <Image
              src='/assets/lighthouse-100.png'
              alt=''
              width={900}
              height={900}
            />
            <div className='text-center text-[var(--text-light)]'>SEO</div>
          </motion.li>
        </div>
      </motion.ul>
    </div>
  );
};

export default BottomAboutCard;
