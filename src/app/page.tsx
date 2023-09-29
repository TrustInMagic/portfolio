'use client';

import React from 'react';
// sections
import Landing from '@/sections/Landing';
import ColorText from '@/sections/ColorText';
import AboutMe from '@/sections/AboutMe';
// components
import ThemeButton from '@/components/ThemeButton';
import NavBar from '@/components/NavBar';
// ------------------------------------------------ //

export default function Home() {
  const [theme, setTheme] = React.useState('light');
  const landingRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={`h-full ${theme}`}>
      <NavBar landing={landingRef} />
      <div
        ref={landingRef}
        className='bg-[var(--background-light)] flex justify-center'
      >
        <div className='max-w-screen-xl'>
          <Landing />
        </div>
      </div>
      <div className='bg-[var(--background-light)] flex justify-center'>
        <div className='max-w-screen-xl'>
          <ColorText />
        </div>
      </div>
      <div className='bg-[var(--background-dark)] flex justify-center '>
        <div className='max-w-screen-xl w-full px-28'>
          <AboutMe />
        </div>
      </div>

      <ThemeButton theme={theme} setTheme={setTheme} />
    </div>
  );
}
