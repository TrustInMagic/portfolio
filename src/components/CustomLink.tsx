'use client';

import React from 'react';
// ------------------------------------------------ //

interface CustomLinkProps {
  text: string;
  isHighlight: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, isHighlight }) => {
  return (
    <div
      className={`cursor-pointer text-[var(--text-dark)] hover:scale-105 
      transition-transform duration-200
      max-650:text-sm max-410:text-xs max-350:text-[10px] no-link ${
        isHighlight && 'highlight'
      }`}
    >
      {text}
    </div>
  );
};

export default CustomLink;
