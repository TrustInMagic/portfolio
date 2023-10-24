import React from 'react';
// components
import SectionHeader from '../components/SectionHeader';
import ProjectCard from './components/ProjectCard';
// next
import { useRouter } from 'next/navigation';
// sound
import useSound from 'use-sound';
// ------------------------------------------------ //

const Projects = () => {
  const [clickSound] = useSound('/assets/click_1.mp3', { volume: 0.25 });
  const router = useRouter();

  return (
    <div className='flex flex-col py-36'>
      <SectionHeader
        title='Projects'
        description='A small preview of my projects'
      />
      <div className='grid grid-cols-2 grid-rows-2 gap-8 max-1000:flex max-1000:flex-col'>
        <div
          onClick={() =>
            router.push('https://github.com/TrustInMagic/ecommerce-store')
          }
        >
          <ProjectCard
            projectImg='/assets/game-store.png'
            tag='E-Commerce Store'
            tagPosition='top'
          />
        </div>
        <div
          onClick={() =>
            router.push('https://github.com/TrustInMagic/nomadverse')
          }
        >
          <ProjectCard
            projectImg='/assets/nomadverse.png'
            tag='Nomadverse'
            tagPosition='top'
          />
        </div>
        <div onClick={() => router.push('/projects/watcher')}>
          <ProjectCard
            projectImg='/assets/watcher.png'
            tag='Market Watcher'
            tagPosition='bottom'
          />
        </div>
        <div onClick={() => router.push('/projects/goldbach')}>
          <ProjectCard
            projectImg='/assets/goldbach.png'
            tag='Goldbach Prime'
            tagPosition='bottom'
          />
        </div>
      </div>
      <button
        className='text-[var(--fillings)] text-xl font-medium mt-20'
        onClick={() => router.push('https://github.com/TrustInMagic')}
        onMouseDown={() => clickSound()}
        onMouseUp={() => clickSound()}
      >
        Show More
      </button>
    </div>
  );
};

export default Projects;
