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
      <Image src={skillImg} alt='' width={100} height={100} />
      <div className='text-[var(--text-light)] font-semibold text-base'>
        {name}
      </div>
    </div>
  );
};

export default DisplaySkill;
