'use client';

import React from 'react';
// ------------------------------------------------ //

interface CustomButtonProps {
  content: string;
  size: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ content, size }) => {
  return (
    <button
      className={`text-white rounded-3xl bg-[var(--fillings)]
      hover:bg-[var(--fillings-dark)] transition-colors ease-in-out duration-200 ${
        size === 'large' ? 'text-xl' : ''
      } ${size === 'large' ? 'px-5 py-2' : 'px-4 py-1'}`}
    >
      {content}
    </button>
  );
};

export default CustomButton;
