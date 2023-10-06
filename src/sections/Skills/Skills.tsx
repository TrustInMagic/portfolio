import React from 'react';
// components
import SectionHeader from '../components/SectionHeader';
import DisplaySkill from './components/DisplaySkill';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

const Skills = () => {
  const commonStyle =
    'bg-[var(--background-light)] text-[var(--text-dark)] rounded-3xl card-box-shadow px-10 py-5 font-bold flex flex-col gap-6 text-lg';

  return (
    <div className='flex flex-col py-36'>
      <SectionHeader
        title='Skills'
        description='Everything I use to turn an idea into reality'
      />
      <div className='grid grid-cols-10 grid-rows-3 gap-5'>
        <motion.div className={`col-span-10 ${commonStyle}`}>
          <div>Languages</div>
          <div className='flex justify-between'>
            <DisplaySkill skillImg='/assets/typescript.png' name='Typescript' />
            <DisplaySkill skillImg='/assets/javascript.png' name='Javascript' />
            <DisplaySkill skillImg='/assets/python.png' name='Python' />
            <DisplaySkill skillImg='/assets/html.png' name='HTML' />
            <DisplaySkill skillImg='/assets/css.png' name='CSS' />
          </div>
        </motion.div>
        <div className={`col-span-5 ${commonStyle}`}>
          <div>Frameworks</div>
          <div className='flex justify-between'>
            <DisplaySkill skillImg='/assets/next.png' name='Next.js' />
            <DisplaySkill skillImg='/assets/tailwind.png' name='Tailwind' />
            <DisplaySkill skillImg='/assets/react.png' name='React' />
          </div>
        </div>
        <div className={`col-span-5 ${commonStyle}`}>
          <div>Libraries</div>
          <div className='flex justify-between'>
            <DisplaySkill skillImg='/assets/mui.png' name='Material UI' />
            <DisplaySkill skillImg='/assets/framer.png' name='Framer Motion' />
            <DisplaySkill
              skillImg='/assets/react-query-seeklogo.com.svg'
              name='React Query'
            />
          </div>
        </div>
        <div className={`col-span-4 ${commonStyle}`}>
          <div>Collaborative Work</div>
          <div className='flex justify-between'>
            <DisplaySkill skillImg='/assets/git.png' name='Git' />
            <DisplaySkill skillImg='/assets/github.png' name='GitHub' />
          </div>
        </div>
        <div className={`col-span-4 ${commonStyle}`}>
          <div>Prototyping</div>
          <div className='flex justify-between'>
            <DisplaySkill skillImg='/assets/figma.png' name='Figma' />
            <DisplaySkill skillImg='/assets/canva.png' name='Canva' />
          </div>
        </div>
        <div className={`col-span-2 ${commonStyle}`}>
          <div>Code Editors</div>
          <div className='flex justify-between'>
            <DisplaySkill skillImg='/assets/vscode.png' name='VSCode' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
