import React from 'react';
// components
import SectionHeader from '../components/SectionHeader';
import DisplaySkill from './components/DisplaySkill';
// framer motion
import { motion, Variants } from 'framer-motion';
// custom hooks
import { useTheme } from '@/providers/ThemeProvider';
// ------------------------------------------------ //

const itemVariants: Variants = {
  open: {
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 150 },
  },
  closed: { scale: 0 },
};

const Skills = () => {
  const commonStyle =
    'bg-[var(--background-light)] text-[var(--text-dark)] rounded-3xl card-box-shadow px-10 py-5 font-bold flex flex-col gap-6 text-lg max-850:px-6';

  const { theme } = useTheme()!;

  return (
    <div className='flex flex-col py-36 max-500:py-20'>
      <SectionHeader
        title='Skills'
        description='What I use to turn an idea into reality'
      />
      <div className='grid grid-cols-10 grid-rows-3 gap-5 max-650:flex max-650:flex-col'>
        <motion.div
          className={`col-span-10 ${commonStyle}`}
          variants={itemVariants}
          initial='closed'
          whileInView='open'
          viewport={{ once: true }}
        >
          <div className='max-650:self-center'>Languages</div>
          <div className='flex justify-between max-650:grid max-650:grid-cols-2 max-650:gap-6'>
            <DisplaySkill skillImg='/assets/typescript.png' name='Typescript' />
            <DisplaySkill skillImg='/assets/javascript.png' name='Javascript' />
            <DisplaySkill skillImg='/assets/python.png' name='Python' />
            <DisplaySkill skillImg='/assets/html.png' name='HTML' />
            <DisplaySkill skillImg='/assets/css.png' name='CSS' />
          </div>
        </motion.div>
        <motion.div
          className={`col-span-5 ${commonStyle}`}
          variants={itemVariants}
          initial='closed'
          whileInView='open'
          viewport={{ once: true }}
        >
          <div className='max-650:self-center'>Frameworks</div>
          <div className='flex justify-between max-650:justify-center max-650:gap-16 max-410:gap-8 max-350:flex-col'>
            <DisplaySkill skillImg='/assets/react.png' name='React' />
            <DisplaySkill
              skillImg={
                theme === 'dark' ? '/assets/next-white.png' : '/assets/next.png'
              }
              name='Next.js'
            />
            <DisplaySkill skillImg='/assets/tailwind.png' name='Tailwind' />
          </div>
        </motion.div>
        <motion.div
          className={`col-span-5 ${commonStyle}`}
          variants={itemVariants}
          initial='closed'
          whileInView='open'
          viewport={{ once: true }}
        >
          <div className='max-650:self-center'>Libraries</div>
          <div className='flex justify-between max-650:justify-center max-650:gap-16 max-410:gap-8 max-350:flex-col'>
            <DisplaySkill skillImg='/assets/mui.png' name='Material UI' />
            <DisplaySkill skillImg='/assets/framer.png' name='Framer Motion' />
            <DisplaySkill
              skillImg='/assets/react-query-seeklogo.com.svg'
              name='React Query'
            />
          </div>
        </motion.div>
        <motion.div
          className={`col-span-4 ${commonStyle}`}
          variants={itemVariants}
          initial='closed'
          whileInView='open'
          viewport={{ once: true }}
        >
          <div className='max-650:self-center'>Collaborative Work</div>
          <div className='flex justify-between max-650:justify-center max-650:gap-16 max-410:gap-8'>
            <DisplaySkill skillImg='/assets/git.png' name='Git' />
            <DisplaySkill skillImg='/assets/github.png' name='GitHub' />
          </div>
        </motion.div>
        <motion.div
          className={`col-span-4 ${commonStyle}`}
          variants={itemVariants}
          initial='closed'
          whileInView='open'
          viewport={{ once: true }}
        >
          <div className='max-650:self-center'>Server Side</div>
          <div className='flex justify-between max-650:justify-center max-650:gap-16 max-410:gap-8'>
            <DisplaySkill skillImg='/assets/node.png' name='Node.js' />
            <DisplaySkill skillImg='/assets/mongo.png' name='MongoDB' />
          </div>
        </motion.div>
        <motion.div
          className={`col-span-2 ${commonStyle} max-1000:px-5 max-850:px-10 max-650:hidden`}
          variants={itemVariants}
          initial='closed'
          whileInView='open'
          viewport={{ once: true }}
        >
          <div>Code Editors</div>
          <div className='flex justify-between'>
            <DisplaySkill skillImg='/assets/vscode.png' name='VSCode' />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
