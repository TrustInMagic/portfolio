'use client';

import React from 'react';
// next
import Image from 'next/image';
// components
import CustomLink from './CustomLink';
// framer motion
import { motion } from 'framer-motion';
// sound
import useSound from 'use-sound';
// ------------------------------------------------ //

interface NavBarProps {
  landing: React.RefObject<HTMLDivElement>;
  about: React.RefObject<HTMLDivElement>;
  portfolio: React.RefObject<HTMLDivElement>;
  skills: React.RefObject<HTMLDivElement>;
  resume: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
  highlight: string;
}

const NavBar: React.FC<NavBarProps> = ({
  landing,
  about,
  portfolio,
  skills,
  resume,
  contact,
  highlight,
}) => {
  const [clickSound] = useSound('/assets/click_1.mp3', { volume: 0.25 });

  const handleLandingClick = () => {
    if (landing) {
      landing.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    if (about) {
      about.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioClick = () => {
    if (portfolio) {
      portfolio.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkillsClick = () => {
    if (skills) {
      skills.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    if (resume) {
      resume.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (contact) {
      contact.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.01 }}
      animate={{ scale: 1 }}
      className='fixed top-5 flex justify-between w-full z-10'
    >
      <div />
      <div
        className='max-w-[600px] px-3 py-2 rounded-3xl flex gap-7 items-center custom-box-shadow backdrop-blur-lg
                      max-650:max-w-[500px] max-500:gap-3 max-410:gap-2'
      >
        <div
          onClick={handleLandingClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <Image
            src='/assets/logo.png'
            alt='logo'
            width={30}
            height={30}
            className='rounded-full cursor-pointer max-650:w-[25px] max-410:w-[20px] max-350:w-[15px]'
            priority
          />
        </div>
        <div
          onClick={handleAboutClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='About Me' isHighlight={highlight === 'about'} />
        </div>
        <div
          onClick={handlePortfolioClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink
            text='Portfolio'
            isHighlight={highlight === 'projects'}
          />
        </div>
        <div
          onClick={handleSkillsClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='Skills' isHighlight={highlight === 'skills'} />
        </div>
        <div
          onClick={handleResumeClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='Resume' isHighlight={highlight === 'resume'} />
        </div>
        <div
          onClick={handleContactClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='Contact' isHighlight={highlight === 'contact'} />
        </div>
      </div>
      <div />
    </motion.div>
  );
};

export default NavBar;
