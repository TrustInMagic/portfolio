import React from 'react';
// framer motion
import { motion } from 'framer-motion';
// components
import TopAboutCards from './components/TopAboutCards';
import InsightCard from './InsigntCard';
// next
import Image from 'next/image';
// theme
import { useTheme } from '@/providers/ThemeProvider';
// ------------------------------------------------ //

const AboutMe = () => {
  const { theme } = useTheme()!;

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
      <div className='pb-36'>
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
          My expertise
        </motion.div>
      </div>
      <TopAboutCards />
      <InsightCard />
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
        <div className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6'>
          <div className='text-xl font-semibold text-[var(--text-dark)]'>
            Performance Optimization
          </div>
          <div className='text-sm text-[var(--text-light)]'>
            via Google Lighthouse
          </div>
          <div className='mt-10 gap-12 grid grid-cols-4'>
            <div className='flex flex-col items-center gap-3'>
              <Image
                src='/assets/lighthouse-100.png'
                alt=''
                width={900}
                height={900}
              />
              <div className='text-center text-[var(--text-light)]'>
                Performance
              </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <Image
                src='/assets/lighthouse-97.png'
                alt=''
                width={900}
                height={900}
              />
              <div className='text-center text-[var(--text-light)]'>
                Accessibility
              </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <Image
                src='/assets/lighthouse-100.png'
                alt=''
                width={900}
                height={900}
              />
              <div className='text-center text-[var(--text-light)]'>
                Best Practices
              </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <Image
                src='/assets/lighthouse-100.png'
                alt=''
                width={900}
                height={900}
              />
              <div className='text-center text-[var(--text-light)]'>SEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
