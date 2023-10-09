'use client';

import React from 'react';
// next
import Image from 'next/image';
// ------------------------------------------------ //

export interface CustomButtonProps {
  content: string;
  size: string;
  onClick?: () => void;
  image?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  content,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className={`text-white rounded-2xl bg-[var(--fillings)] flex items-center justify-center gap-2 w-full
      hover:bg-[var(--fillings-dark)] transition-colors ease-in-out duration-200 
      } ${size === 'large' ? 'text-xl' : ''} ${
        size === 'large' ? 'px-5 py-2' : 'px-4 py-1'
      }`}
    >
      {props.image ? (
        <Image src={props.image} alt='' width={20} height={20} />
      ) : (
        ''
      )}
      {content}
    </button>
  );
};

export default CustomButton;
