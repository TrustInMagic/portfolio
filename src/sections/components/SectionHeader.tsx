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
        className='text-2xl font-semibold text-[var(--text-light)]
        max-650:text-xl'
      >
        {title}
      </motion.div>
      <motion.div
        initial={initial}
        whileInView={appear}
        viewport={{ once: true }}
        className={`mt-4 font-bold text-6xl text-[var(--text-dark)] whitespace-nowrap${
          resume ? styles['custom-gradient'] : ''
        }
        max-650:text-5xl max-410:text-4xl max-1250:whitespace-normal`}
      >
        {description}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
