'use client';

import React from 'react';
// next
import Image from 'next/image';
// sound
import useSound from 'use-sound';
// ------------------------------------------------ //

export interface CustomButtonProps {
  content: string;
  size: string;
  onClick?: () => void;
  image?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  content,
  size,
  ...props
}) => {
  const [clickSound] = useSound('/assets/click_1.mp3', { volume: 0.25 });

  return (
    <button
      {...props}
      onClick={props.onClick}
      onMouseDown={() => clickSound()}
      onMouseUp={() => clickSound()}
      className={`text-white rounded-2xl bg-[var(--fillings)] flex items-center justify-center gap-2 w-full
      hover:bg-[var(--fillings-dark)] transition-colors ease-in-out duration-200
      max-650:text-sm max-410:text-xs
      ${size === 'large' ? 'text-xl' : ''} ${
        size === 'large' ? 'px-5 py-2' : 'px-4 py-1'
      }`}
      style={{
        backgroundColor: props.disabled ? '#9ca3af' : '',
        color: props.disabled ? '#d1d5db' : '',
      }}
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
