import React from 'react';
// next
import Image from 'next/image';
// types
import { CustomButtonProps } from '@/components/CustomButton/CustomButton';
// ------------------------------------------------ //

interface CustomButtonPropsExtended extends CustomButtonProps {
  alternateImage: string;
}

const WhiteCustomButton: React.FC<CustomButtonPropsExtended> = ({
  content,
  size,
  ...props
}) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={props.onClick}
      className={`text-[#0064ff] rounded-2xl bg-[#FFFF] flex items-center gap-2
      hover:bg-[var(--fillings)] hover:text-[#FFFF] transition-colors ease-in-out duration-200 
      } ${size === 'large' ? 'text-xl' : ''} ${
        size === 'large' ? 'px-5 py-2' : 'px-4 py-1'
      }`}
    >
      {' '}
      {props.image ? (
        <Image
          src={isHover ? props.alternateImage : props.image}
          alt=''
          width={20}
          height={20}
        />
      ) : (
        ''
      )}
      {content}
    </button>
  );
};

export default WhiteCustomButton;
