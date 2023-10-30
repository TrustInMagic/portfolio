import React from 'react';
// next
import Image from 'next/image';
// components
import CleanCode from './components/CleanCode';
import PerformanceCircle from './components/PerformanceCircle/PerformanceCircle';
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
  const commonCardStyle =
    'text-center text-[var(--text-light)] max-1250:text-sm max-1000:text-base max-500:text-sm max-350:text-xs whitespace-nowrap';

  return (
    <div className='flex gap-6 max-1000:flex-col max-500:gap-4'>
      <div
        className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6 max-500:mt-4
      max-350:p-4 flex flex-col max-500:gap-4'
      >
        <div
          className='text-xl font-semibold text-[var(--text-dark)] 
        max-1000:text-2xl max-410:text-xl'
        >
          Clean Code
        </div>
        <div className='mt-6'>
          <CleanCode />
        </div>
      </div>
      <motion.ul
        className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6 max-410:p-4 max-500:mt-0'
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
        <div
          className='text-xl font-semibold text-[var(--text-dark)] 
        max-1000:text-2xl max-410:text-xl'
        >
          Performance Optimization
        </div>
        <div className='text-sm text-[var(--text-light)] max-1000:text-base'>
          via Google Lighthouse
        </div>
        <div className='mt-10 gap-12 grid grid-cols-4 max-410:grid-cols-3 max-410:mx-4 max-350:mt-5'>
          <motion.li
            className='flex flex-col items-center gap-3'
            variants={itemVariants}
          >
            <PerformanceCircle value={93} strokeDashX={327} strokeDashY={351} />
            <div className={commonCardStyle}>Performance</div>
          </motion.li>
          <motion.li
            className='flex flex-col items-center gap-3'
            variants={itemVariants}
          >
            <PerformanceCircle value={99} strokeDashX={340} strokeDashY={351} />
            <div className={commonCardStyle}>Accessibility</div>
          </motion.li>
          <motion.li
            className='flex flex-col items-center gap-3'
            variants={itemVariants}
          >
            <PerformanceCircle
              value={100}
              strokeDashX={360}
              strokeDashY={360}
            />
            <div className={commonCardStyle}>Best Practices</div>
          </motion.li>
          <motion.li
            className='flex flex-col items-center gap-3 max-410:hidden'
            variants={itemVariants}
          >
            <PerformanceCircle
              value={100}
              strokeDashX={360}
              strokeDashY={360}
            />
            <div className={commonCardStyle}>SEO</div>
          </motion.li>
        </div>
      </motion.ul>
    </div>
  );
};

export default BottomAboutCard;
