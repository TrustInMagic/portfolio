import React from 'react';
// components
import SectionHeader from '../components/SectionHeader';
import ProjectCard from './components/ProjectCard';
// next
import { useRouter } from 'next/navigation';
// ------------------------------------------------ //

const Projects = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col py-36'>
      <SectionHeader
        title='Projects'
        description='A small preview of my projects'
      />
      <div className='grid grid-cols-2 grid-rows-2 gap-8'>
        <ProjectCard
          projectImg='/assets/game-store.png'
          tag='E-Commerce Store'
          tagPosition='top'
        />
        <ProjectCard
          projectImg='/assets/nomadverse.png'
          tag=''
          tagPosition='top'
        />
        <ProjectCard
          projectImg='/assets/game-store.png'
          tag=''
          tagPosition='bottom'
        />
        <ProjectCard
          projectImg='/assets/nomadverse.png'
          tag=''
          tagPosition='bottom'
        />
      </div>
      <button
        className='text-[var(--fillings)] text-xl font-medium mt-20'
        onClick={() => router.push('https://github.com/TrustInMagic')}
      >
        Show More
      </button>
    </div>
  );
};

export default Projects;
