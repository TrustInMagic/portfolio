'use client';

import React from 'react';
// next
import Image from 'next/image';
// components
import CustomLink from './CustomLink';
import CustomButton from './CustomButton';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

const NavBar: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className='fixed top-5 flex justify-between w-full z-10'
    >
      <div />
      <div className='max-w-[600px] px-3 py-2 rounded-3xl flex gap-7 items-center custom-box-shadow backdrop-blur-lg'>
        <Image
          src='/assets/logo.png'
          alt='logo'
          width={35}
          height={35}
          className='rounded-full cursor-pointer'
          priority
        />
        <CustomLink text='About Me' />
        <CustomLink text='Portfolio' />
        <CustomLink text='Skills' />
        <CustomLink text='Resume' />
        <CustomButton content='Contact' size='small'/>
      </div>
      <div />
    </motion.div>
  );
};

export default NavBar;
