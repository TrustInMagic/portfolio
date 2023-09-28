'use client';

import React from 'react';
// next
import { useRouter } from 'next/navigation';
// ------------------------------------------------ //

interface CustomLinkProps {
  text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('#top');
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer text-[var(--text-dark)] hover:scale-105 
      hover:text-[var(--fillings-dark)] transition-transform duration-200`}
    >
      {text}
    </div>
  );
};

export default CustomLink;
