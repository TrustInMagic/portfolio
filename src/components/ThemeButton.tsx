import React from 'react';
// framer motion
import { motion } from 'framer-motion';
// sound
import useSound from 'use-sound';
// custom hooks
import { useScreenSize } from '@/providers/ScreenSizeProvider';
// ------------------------------------------------ //

interface ThemeButtonProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, setTheme }) => {
  const [isHover, setIsHover] = React.useState(false);
  const [clickSound] = useSound('/assets/click_1.mp3', { volume: 0.25 });
  const { screenWidth } = useScreenSize();

  const handleClick = () => {
    setTheme((prev) => {
      if (prev === 'light') {
        window.localStorage.setItem('theme', 'dark');
        return 'dark';
      } else {
        window.localStorage.setItem('theme', 'light');
        return 'light';
      }
    });
  };

  return (
    <motion.button
      initial={{ y: 100 }}
      animate={{
        y: 0,
        transition: { duration: 0.5, bounce: 200, delay: 0.5 },
        rotate: [0, 0, 180, 360, 360],
      }}
      onClick={handleClick}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onMouseDown={() => clickSound()}
      onMouseUp={() => clickSound()}
      className='fixed bottom-4 left-3 flex items-center gap-2 px-4 py-3 rounded-2xl font-medium text-sm 
      bg-[var(--theme-button)] hover:bg-[var(--fillings)] text-[var(--text-dark)] hover:text-[#FFFFFF] 
      transition-colors ease-in-out duration-200'
      style={{
        boxShadow: '0 3px 7px rgba(0,0,0,.2)',
      }}
    >
      {theme === 'light' ? (
        <svg
          width='20px'
          height='20px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='24' height='24' fill='none' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z'
            fill={isHover ? '#FFFFFF' : '#323232'}
          />
        </svg>
      ) : (
        <svg
          width='20px'
          height='20px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0' />

          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          />

          <g id='SVGRepo_iconCarrier'>
            {' '}
            <path
              d='M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z'
              fill='#ffffff'
            />{' '}
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z'
              fill='#ffffff'
            />{' '}
            <g opacity='0.5'>
              {' '}
              <path
                d='M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z'
                fill='#ffffff'
              />{' '}
              <path
                d='M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z'
                fill='#ffffff'
              />{' '}
              <path
                d='M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z'
                fill='#ffffff'
              />{' '}
              <path
                d='M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z'
                fill='#ffffff'
              />{' '}
            </g>{' '}
          </g>
        </svg>
      )}
      {screenWidth > 410 ? (
        <div>Turn lights {theme === 'light' ? 'off' : 'on'}</div>
      ) : (
        ''
      )}
    </motion.button>
  );
};

export default ThemeButton;
