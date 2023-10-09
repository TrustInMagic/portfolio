import React from 'react';
import styles from './SectionHeader.module.css';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

interface SectionHeaderProps {
  title: string;
  description: string;
  resume?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  resume,
}) => {
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
    <div className='pb-20'>
      <motion.div
        initial={initial}
        whileInView={appear}
        viewport={{ once: true }}
        className='text-2xl font-semibold text-[var(--text-light)]'
      >
        {title}
      </motion.div>
      <motion.div
        initial={initial}
        whileInView={appear}
        viewport={{ once: true }}
        className={`mt-4 font-bold text-6xl text-[var(--text-dark)] ${
          resume ? styles['custom-gradient'] : ''
        }`}
      >
        {description}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
