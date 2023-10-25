import React from 'react';
// components
import SectionHeader from '../components/SectionHeader';
import ResumeCard from './components/ResumeCard';
// ------------------------------------------------ //

interface ResumeProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const Resume: React.FC<ResumeProps> = ({ contactRef }) => {
  return (
    <div className='flex flex-col py-36 max-500:py-20'>
      <SectionHeader
        title='Resume'
        description='Interested in working with me?'
        resume
      />
      <div className='self-center'>
        <ResumeCard contactRef={contactRef} />
      </div>
    </div>
  );
};

export default Resume;
