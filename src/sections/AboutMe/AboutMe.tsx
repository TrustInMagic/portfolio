import React from 'react';
// components
import TopAboutCards from './components/TopAboutCards';
import InsightCard from './components/InsightCard';
import BottomAboutCard from './components/BottomAboutCard';
import SectionHeader from '../components/SectionHeader';
// ------------------------------------------------ //

const AboutMe = () => {
  return (
    <div className='flex flex-col py-36'>
      <SectionHeader title='About me' description='My expertise' />
      <TopAboutCards />
      <InsightCard />
      <BottomAboutCard />
    </div>
  );
};

export default AboutMe;
