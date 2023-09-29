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
      hover:text-[var(--fillings)] transition-transform duration-200`}
    >
      {text}
    </div>
  );
};

export default CustomLink;
