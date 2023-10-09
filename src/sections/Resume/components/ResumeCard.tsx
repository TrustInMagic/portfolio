import React from 'react';
import styles from './Resume.module.css';
// next
import Image from 'next/image';
// components
import CustomButton from '@/components/CustomButton/CustomButton';
import WhiteCustomButton from './WhiteCustomButton';
// ------------------------------------------------ //

interface ResumeCardProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ contactRef }) => {
  const handleClick = () => {
    if (contactRef) {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`rounded-3xl card-box-shadow ${styles['resume-card']} w-[800px] flex pr-10 gap-10 justify-center`}
    >
      <Image src='/assets/resume-avatar.png' alt='' width={400} height={400} />
      <div className='flex flex-col justify-center items-center gap-8'>
        <div className='text-[#FFFFFF] text-center'>
          Should you still have any questions, feel free to contact me.
          Additionally, you can download my resume below.
        </div>
        <div className='flex flex-col gap-2'>
          <CustomButton
            content='Download CV'
            size='large'
            image='/assets/download.svg'
          />
          <WhiteCustomButton
            content='Contact me'
            size='large'
            onClick={handleClick}
            image='/assets/message-blue.svg'
            alternateImage='/assets/message-white.svg'
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
