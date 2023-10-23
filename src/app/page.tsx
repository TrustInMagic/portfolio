'use client';

import React from 'react';
// sections
import Landing from '@/sections/Landing/Landing';
import ColorText from '@/sections/ColorText/ColorText';
import AboutMe from '@/sections/AboutMe/AboutMe';
import Projects from '@/sections/Projects/Projects';
import Skills from '@/sections/Skills/Skills';
import Resume from '@/sections/Resume/Resume';
import Contact from '@/sections/Contact/Contact';
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
  const resumeRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const sectionCommonStyles = 'max-w-screen-xl w-full px-28 max-850:px-12 max-500:px-3';

  return (
    <div className={`h-full ${theme}`}>
      <NavBar
        landing={landingRef}
        about={aboutMeRef}
        portfolio={projectsRef}
        skills={skillsRef}
        resume={resumeRef}
        contact={contactRef}
      />
      <div
        ref={landingRef}
        className='bg-[var(--background-light)] flex justify-center'
      >
        <div className={sectionCommonStyles}>
          <Landing moreRef={aboutMeRef} />
        </div>
      </div>
      <div className='bg-[var(--background-light)] flex justify-center'>
        <div className={sectionCommonStyles}>
          <ColorText />
        </div>
      </div>
      <div
        className='bg-[var(--background-dark)] flex justify-center'
        ref={aboutMeRef}
      >
        <div className={sectionCommonStyles}>
          <AboutMe />
        </div>
      </div>
      <div
        className='bg-[var(--background-light)] flex justify-center'
        ref={projectsRef}
      >
        <div className={sectionCommonStyles} id='portfolio'>
          <Projects />
        </div>
      </div>
      <div
        className='bg-[var(--background-dark)] flex justify-center'
        ref={skillsRef}
      >
        <div className={sectionCommonStyles}>
          <Skills />
        </div>
      </div>
      <div
        className='bg-[var(--background-light)] flex justify-center'
        ref={resumeRef}
      >
        <div className={sectionCommonStyles}>
          <Resume contactRef={contactRef} />
        </div>
      </div>
      <div
        className='bg-[var(--background-dark)] flex justify-center'
        ref={contactRef}
      >
        <div className={sectionCommonStyles}>
          <Contact />
        </div>
      </div>

      <ThemeButton theme={theme} setTheme={setTheme} />
    </div>
  );
}
