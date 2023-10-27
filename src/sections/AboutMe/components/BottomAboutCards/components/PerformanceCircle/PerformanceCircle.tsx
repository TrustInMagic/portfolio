import React from 'react';
import styles from './PerformanceCircle.module.css';
// ------------------------------------------------ //

interface PerformanceCircleProps {
  value: number;
  strokeDashX: number;
  strokeDashY: number;
}

const PerformanceCircle: React.FC<PerformanceCircleProps> = ({
  value,
  strokeDashX,
  strokeDashY,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={styles.svg}
      viewBox='40 0 120 120'
      width='80'
      height='80'
      x='0'
      y='0'
    >
      <circle
        className={styles['circle-base']}
        r='56'
        cx='100'
        cy='60'
        stroke-width='8'
      />
      <circle
        className={styles['circle-arc']}
        r='56'
        cx='100'
        cy='60'
        stroke-width='8'
        style={{ strokeDasharray: `${strokeDashX}, ${strokeDashY}` }}
      />
      <text
        className={styles.value}
        x='100px'
        y='60px'
        alignment-baseline='central'
        dominant-baseline='central'
        text-anchor='middle'
      >
        {value}
      </text>
    </svg>
  );
};

export default PerformanceCircle;
