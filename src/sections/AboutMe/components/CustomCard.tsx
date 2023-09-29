import React from 'react';
import styles from './CustomCard.module.css';
// ------------------------------------------------ //

interface CustomCardProps {
  highlight: string;
  text: string;
  idx: number;
  sign?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  highlight,
  text,
  idx,
  sign,
}) => {
  return (
    <div
      className='card-box-shadow p-8 rounded-3xl bg-[var(--background-light)] 
    flex flex-col items-center justify-center h-full gap-1'
    >
      <div
        className={`${styles[`gradient-${idx}`]}`}
        style={{ display: 'flex' }}
      >
        <div className={`text-4xl font-bold`}>{highlight}</div>
        <div
          className='font-bold text-2xl'
          style={{ alignSelf: idx === 3 ? 'end' : 'start' }}
        >
          {sign}
        </div>
      </div>
      <div className='text-[var(--text-light)] text-sm text-center'>{text}</div>
    </div>
  );
};

export default CustomCard;
