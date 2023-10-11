'use client';

import React from 'react';
// next
import Image from 'next/image';
// components
import CustomLink from './CustomLink';
import CustomButton from './CustomButton/CustomButton';
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
}

const NavBar: React.FC<NavBarProps> = ({
  landing,
  about,
  portfolio,
  skills,
  resume,
  contact,
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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className='fixed top-5 flex justify-between w-full z-10'
    >
      <div />
      <div className='max-w-[600px] px-3 py-2 rounded-3xl flex gap-7 items-center custom-box-shadow backdrop-blur-lg'>
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
            className='rounded-full cursor-pointer'
            priority
          />
        </div>
        <div
          onClick={handleAboutClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='About Me' />
        </div>
        <div
          onClick={handlePortfolioClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='Portfolio' />
        </div>
        <div
          onClick={handleSkillsClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='Skills' />
        </div>
        <div
          onClick={handleResumeClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomLink text='Resume' />
        </div>
        <div
          onClick={handleContactClick}
          onMouseDown={() => clickSound()}
          onMouseUp={() => clickSound()}
        >
          <CustomButton content='Contact' size='small' />
        </div>
      </div>
      <div />
    </motion.div>
  );
};

export default NavBar;
