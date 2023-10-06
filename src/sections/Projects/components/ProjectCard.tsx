import React from 'react';
// next
import Image from 'next/image';
// ------------------------------------------------ //

interface ProjectCardProps {
  projectImg: string;
  tag: string;
  tagPosition: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImg,
  tag,
  tagPosition,
}) => {
  const [visibleTooltip, setVisibleTooltip] = React.useState(false);

  return (
    <div className='relative'>
      <div
        className='project-box-shadow rounded-2xl cursor-pointer
                  hover:scale-[1.02] transition-transform duration-300 ease-in-out'
        onMouseEnter={() => setVisibleTooltip(true)}
        onMouseLeave={() => setVisibleTooltip(false)}
      >
        <Image
          src={projectImg}
          alt=''
          width={900}
          height={900}
          className='rounded-2xl'
        />
      </div>
      {tagPosition === 'top' ? (
        <div
          className='absolute left-1/2 transform -translate-x-1/2 -top-0 
                      bg-[#404040] text-[#FFFFFF] px-3 py-1 rounded-2xl transition-all'
          style={{
            top: visibleTooltip ? '-40px' : '0px',
            opacity: visibleTooltip ? '1' : '0',
          }}
        >
          {tag}
        </div>
      ) : (
        <div
          className='absolute left-1/2 transform -translate-x-1/2 -bottom-0 
                      bg-[#404040] text-[#FFFFFF] px-3 py-1 rounded-2xl transition-all'
          style={{
            bottom: visibleTooltip ? '-40px' : '0px',
            opacity: visibleTooltip ? '1' : '0',
          }}
        >
          {tag}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
