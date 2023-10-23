'use client';

import React from 'react';
// ------------------------------------------------ //

interface CustomLinkProps {
  text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text }) => {

  return (
    <div
      className={`cursor-pointer text-[var(--text-dark)] hover:scale-105 
      hover:text-[var(--fillings)] transition-transform duration-200
      max-650:text-sm max-410:text-xs max-350:text-[10px]`}
    >
      {text}
    </div>
  );
};

export default CustomLink;
