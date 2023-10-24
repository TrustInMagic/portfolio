import React from 'react';
// next
import Image from 'next/image';
// ------------------------------------------------ //

interface DisplaySkillProps {
  skillImg: string;
  name: string;
}

const DisplaySkill: React.FC<DisplaySkillProps> = ({ skillImg, name }) => {
  return (
    <div className='flex flex-col gap-3 items-center justify-between'>
      <Image
        src={skillImg}
        alt=''
        width={100}
        height={100}
        className='max-1250:w-[80px] max-1000:w-[60px] max-650:w-[80px] max-410:w-[60px]'
      />
      <div className='text-[var(--text-light)] font-semibold text-base text-center
      max-1000:text-sm max-650:text-base max-410:text-sm'>
        {name}
      </div>
    </div>
  );
};

export default DisplaySkill;
