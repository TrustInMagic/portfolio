import React from 'react';
// next
import Image from 'next/image';
// ------------------------------------------------ //

interface SocialButtonProps {
  text: string;
  iconSrc: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  text,
  iconSrc,
  ...props
}) => {
  const [isHover, setIsHover] = React.useState(false);

  const altIconSrc = iconSrc.replace('gray', 'white');
  const hoverBackground =
    text === 'Linkedin'
      ? 'linear-gradient(to right, #2193b0, #6dd5ed)'
      : text === 'GitHub'
      ? 'linear-gradient(to right, #9d50bb, #6e48aa)'
      : 'linear-gradient(to right, #11998e, #38ef7d)';

  return (
    <div
      onClick={props.onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`cursor-pointer flex gap-3 bg-[var(--background-dark)] text-[var(--text-light)] 
                    rounded-md p-3 font-semibold w-[500] items-center`}
      style={{
        color: isHover ? '#FFFF' : '',
        background: isHover ? hoverBackground : '',
      }}
    >
      <Image
        src={isHover ? altIconSrc : iconSrc}
        height={20}
        width={20}
        alt=''
      />
      <div>{text}</div>
    </div>
  );
};

export default SocialButton;
