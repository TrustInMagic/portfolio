'use client';

import React from 'react';
// next
import Image from 'next/image';
// components
import CustomLink from './CustomLink';
import CustomButton from './CustomButton';
// framer motion
import { motion } from 'framer-motion';
// assets
import logo from '../assets/logo.png';
// ------------------------------------------------ //

interface NavBarProps {
  landing: React.RefObject<HTMLDivElement>;
  about: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({ landing, about }) => {
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

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className='fixed top-5 flex justify-between w-full z-10'
    >
      <div />
      <div className='max-w-[600px] px-3 py-2 rounded-3xl flex gap-7 items-center custom-box-shadow backdrop-blur-lg'>
        <div onClick={handleLandingClick}>
          <Image
            src={logo}
            alt='logo'
            width={30}
            height={30}
            className='rounded-full cursor-pointer'
            priority
          />
        </div>
        <div onClick={handleAboutClick}>
          <CustomLink text='About Me' />
        </div>
        <CustomLink text='Portfolio' />
        <CustomLink text='Skills' />
        <CustomLink text='Resume' />
        <CustomButton content='Contact' size='small' />
      </div>
      <div />
    </motion.div>
  );
};

export default NavBar;
