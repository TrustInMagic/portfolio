'use client';

import React from 'react';
// sections
import Landing from '@/sections/Landing/Landing';
import ColorText from '@/sections/ColorText/ColorText';
import AboutMe from '@/sections/AboutMe/AboutMe';
import Projects from '@/sections/Projects/Projects';
import Skills from '@/sections/Skills/Skills';
// components
import ThemeButton from '@/components/ThemeButton';
import NavBar from '@/components/NavBar';
// theme
import { useTheme } from '@/providers/ThemeProvider';
// ------------------------------------------------ //

export default function Home() {
  const { theme, setTheme } = useTheme()!;
  const landingRef = React.useRef<HTMLDivElement>(null);
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={`h-full ${theme}`}>
      <NavBar landing={landingRef} about={aboutMeRef} portfolio={projectsRef} />
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
      <div
        className='bg-[var(--background-dark)] flex justify-center'
        ref={aboutMeRef}
      >
        <div className='max-w-screen-xl w-full px-28'>
          <AboutMe />
        </div>
      </div>
      <div
        className='bg-[var(--background-light)] flex justify-center'
        ref={projectsRef}
      >
        <div className='max-w-screen-xl w-full px-28'>
          <Projects />
        </div>
      </div>
      <div
        className='bg-[var(--background-dark)] flex justify-center'
        ref={skillsRef}
      >
        <div className='max-w-screen-xl w-full px-28'>
          <Skills />
        </div>
      </div>

      <ThemeButton theme={theme} setTheme={setTheme} />
    </div>
  );
}
