import React from 'react';
// components
import TopAboutCards from './components/TopAboutCards';
import InsightCard from './components/InsightCard';
import BottomAboutCard from './components/BottomAboutCards/BottomAboutCard';
import SectionHeader from '../components/SectionHeader';
// ------------------------------------------------ //

const AboutMe = () => {
  return (
    <div className='flex flex-col py-36 max-500:py-20'>
      <SectionHeader title='About me' description='My expertise' />
      <TopAboutCards />
      <InsightCard />
      <BottomAboutCard />
    </div>
  );
};

export default AboutMe;
