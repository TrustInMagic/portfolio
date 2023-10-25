import React from 'react';
import styles from './Resume.module.css';
// next
import Image from 'next/image';
// components
import CustomButton from '@/components/CustomButton/CustomButton';
import WhiteCustomButton from './WhiteCustomButton';
// custom hooks
import { useScreenSize } from '@/providers/ScreenSizeProvider';
// ------------------------------------------------ //

interface ResumeCardProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ contactRef }) => {
  const { screenWidth } = useScreenSize();

  const handleClick = () => {
    if (contactRef) {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`rounded-3xl card-box-shadow ${styles['resume-card']} w-[800px] flex pr-10 gap-10 justify-center
      max-1000:w-[700px] max-850:w-[600px] max-850:gap-5 max-650:flex-col max-650:w-[450px]
      max-650:py-10 max-650:px-16 max-650:gap-0 max-650:pb-0 max-500:w-[390px]
      max-410:w-[350px] max-410:px-8 max-410:py-6 max-350:w-[260px]`}
    >
      {screenWidth > 650 && (
        <Image
          src='/assets/resume-avatar.png'
          alt=''
          width={400}
          height={400}
          className='max-850:w-[350px]'
        />
      )}
      <div className='flex flex-col justify-center items-center gap-8'>
        <div className='text-[#FFFFFF] text-center'>
          Should you still have any questions, feel free to contact me.
          Additionally, you can download my resume below.
        </div>
        <div className='flex flex-col gap-2'>
          <CustomButton
            content='Download CV'
            size={
              screenWidth > 850
                ? 'large'
                : screenWidth < 650
                ? 'large'
                : 'small'
            }
            image='/assets/download.svg'
          />
          <WhiteCustomButton
            content='Contact me'
            size={
              screenWidth > 850
                ? 'large'
                : screenWidth < 650
                ? 'large'
                : 'small'
            }
            onClick={handleClick}
            image='/assets/message-blue.svg'
            alternateImage='/assets/message-white.svg'
          />
        </div>
      </div>
      {screenWidth < 650 && (
        <Image
          src='/assets/resume-avatar.png'
          alt=''
          width={400}
          height={400}
          className='max-850:w-[350px] self-center'
        />
      )}
    </div>
  );
};

export default ResumeCard;
