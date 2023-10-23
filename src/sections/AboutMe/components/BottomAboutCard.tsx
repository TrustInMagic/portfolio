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
  const commonCardStyle =
    'text-center text-[var(--text-light)] max-1250:text-sm max-1000:text-base max-500:text-sm';

  return (
    <div className='flex gap-6 max-1000:flex-col'>
      <div className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6'>
        <div className='text-xl font-semibold text-[var(--text-dark)] max-1000:text-2xl'>
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
        <div className='text-xl font-semibold text-[var(--text-dark)] max-1000:text-2xl'>
          Performance Optimization
        </div>
        <div className='text-sm text-[var(--text-light)] max-1000:text-base'>
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
            <div className={commonCardStyle}>Performance</div>
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
            <div className={commonCardStyle}>Accessibility</div>
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
            <div className={commonCardStyle}>Best Practices</div>
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
            <div className={commonCardStyle}>SEO</div>
          </motion.li>
        </div>
      </motion.ul>
    </div>
  );
};

export default BottomAboutCard;
