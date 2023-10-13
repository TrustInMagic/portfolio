import React from 'react';
// components
import CustomCard from './CustomCard/CustomCard';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

const TopAboutCards = () => {
  return (
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
          I began programming through self-teaching, starting with Python and
          completing an advanced course. I transitioned into Frontend
          development, finding a passion for it due to my visual inclination.
          Initially working with HTML, CSS, and JavaScript, I quickly fell in love with
          React, and currently work with TypeScript and TailwindCSS within the
          framework. My server-side expertise includes Node and MongoDB, and I also
          enjoy utilizing motion libraries like Framer Motion.
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
  );
};

export default TopAboutCards;
