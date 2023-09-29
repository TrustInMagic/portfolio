import React from 'react';
// framer motion
import { motion } from 'framer-motion';
// components
import CustomCard from './components/CustomCard';
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
          <CustomCard highlight='20' text='Projects' idx={2} sign='+' />
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
    </div>
  );
};

export default AboutMe;
