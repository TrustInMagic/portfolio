import React from 'react';
// next
import Image from 'next/image';
// ------------------------------------------------ //

const InsightCard = () => {
  const videoRef = React.useRef<null | HTMLVideoElement>(null);
  const [play, setPlay] = React.useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (play) {
        videoRef.current.pause();
        setPlay(false);
      } else {
        videoRef.current.play();
        setPlay(true);
      }
    }
  };

  return (
    <div
      className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] w-full mt-6 flex gap-24 items-center
      max-1250:gap-10 max-1000:flex-col'
      style={{
        background: 'linear-gradient(90deg,#e7505e,#cb5891 35%,#a364dc)',
      }}
    >
      <div className='max-w-[500px] max-1000:max-w-full'>
        <div className='text-[#FFFFFF] text-3xl font-semibold'>
          A little snapshot of my work
        </div>
        <div className='text-[#FFFFFF] mt-6'>
          Whether elaborately animated or structurally complex projects,
          {/* eslint-disable-next-line */}
          {' '}you'll find both in my portfolio -
          because a good developer should be able to pull off both.
        </div>
      </div>
      <div className='relative'>
        <video
          className='absolute rounded'
          style={{ border: 'solid 4px' }}
          muted
          autoPlay
          preload='auto'
          loop
          ref={videoRef}
          onClick={handleVideoClick}
        >
          <source src='/assets/colage-compressed.mp4' type='video/mp4' />
        </video>
        <Image
          src='/assets/mac-screen.png'
          alt='Mac Screen'
          width={900}
          height={900}
        />
      </div>
    </div>
  );
};

export default InsightCard;
