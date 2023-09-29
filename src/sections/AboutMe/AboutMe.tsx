import React from 'react';
// framer motion
import { motion } from 'framer-motion';
// components
import CustomCard from './components/CustomCard/CustomCard';
// assets
import macScreen from '../../assets/mac-screen.png';
import video from '../../assets/video.mp4';
import cleanCode from '../../assets/clean-code.png';
import cleanCodeDark from '../../assets/clean-code-dark.png';
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
          My tech stack and expertise
        </motion.div>
      </div>
      <div
        className='grid grid-rows-2 gap-6'
        style={{ display: 'grid', gridTemplateColumns: '1fr 0.5fr 0.5fr' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] 
          row-start-1 row-end-3 col-start-1 col-end-2'
        >
          <div className='mb-5 text-2xl font-semibold text-[var(--text-dark)]'>
            Passionate React developer
          </div>
          <div className='text-[var(--text-light)]'>
            I initiated my journey into programming with a self-taught approach,
            beginning with HTML, CSS, and JavaScript. However, the technological
            landscape has evolved, extending well beyond the realm of vanilla
            JavaScript. Currently, my toolkit includes TypeScript, integrated
            within the React framework, and TailwindCSS for aesthetic
            refinement. On the server side, I utilize Node, coupled with MongoDB
            for database management. As you can see, I also like to work with
            motion libraries - e.g. Framer Motion
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <CustomCard
            highlight='1000'
            text='GitHub Contributions'
            idx={0}
            sign='+'
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <CustomCard
            highlight='2nd place'
            text='Most liked project thread of "The Odin Project"'
            idx={1}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <CustomCard highlight='25' text='Projects' idx={2} sign='+' />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <CustomCard highlight='100' text='Passion' idx={3} sign='%' />
        </motion.div>
      </div>
      <div
        className='card-box-shadow p-16 rounded-3xl bg-[var(--background-light)] w-full mt-6 flex gap-24 items-center'
        style={{
          background: 'linear-gradient(90deg,#e7505e,#cb5891 35%,#a364dc)',
        }}
      >
        <div className='max-w-[500px]'>
          <div className='text-[#FFFFFF] text-3xl font-semibold'>
            A little insight into my work
          </div>
          <div className='text-[#FFFFFF] mt-6'>
            Whether elaborately animated or structurally complex projects,
            {/* eslint-disable-next-line */}
            you'll find both in my portfolio - because a good developer should
            be able to pull off both.
          </div>
        </div>
        <div className='relative'>
          <video
            className='absolute rounded'
            style={{ border: 'solid 4px' }}
            controls
            muted
            autoPlay
            preload='auto'
            loop
          >
            <source src={video} type='video/mp4' />
          </video>
          <Image src={macScreen} alt='Mac Screen' />
        </div>
      </div>
      <div className='flex gap-6'>
        <div className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6'>
          <div className='text-xl font-semibold text-[var(--text-dark)]'>
            Clean Code
          </div>
          <Image
            src={theme === 'light' ? cleanCode : cleanCodeDark}
            alt='Clean Code'
            className='mt-6'
          />
        </div>
        <div className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6'>
          <div className='text-xl font-semibold text-[var(--text-dark)]'>
            Performance Optimization
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
