import { Header, Hero, ContactUs, WhatAreWe, WhoAreWe } from '../components';
import '../assets/all.css';

const LandingPage = () => {
  return (
    <div className='all'>
      <Header 
        logo='' 
        sectionName1='WHAT ARE WE?' 
        sectionName2='WHO ARE WE?' 
        sectionName3='WANNA CONTACT?'
      />
      <Hero 
        mainTitle="36'ORACLE" 
        secondTitle='A NEW WAY OF SEEING MONEY' 
      />
      <WhatAreWe 
        title1='WHAT' 
        title2='ARE WE?' 
        list1='A SYSTEM THAT RECIVES THE DATABASES SENT BY THE BANK' 
        list2='STORES DATA VIA SOLANA BLOCKCHAIN' 
        list3='USES AI TO CATEGORIZE PROFILES AND PREDICT BEHAVIORS' 
        list4='PROVIDES VALUABLE INSIGHTS' 
        description='batatas' 
      />
      <WhoAreWe 
        title='WHO' 
        description1="WE ARE A TEAM OF TECH ENTHUSIASTS PARTICIPATING IN A HACKATHON WITH A MISSION TO REVOLUTIONIZE FINANCIAL DATA MANAGEMENT. OUR PROJECT, 36'ORACLE, COMBINES BLOCKCHAIN AND AI TO OFFER SECURE, TRANSPARENT, AND EFFICIENT BANKING SOLUTIONS." 
        description2='WITH EXPERTISE IN SOFTWARE DEVELOPMENT AND DATA SCIENCE, WE ARE DRIVEN TO CREATE INNOVATIVE TOOLS THAT EMPOWER INSTITUTIONS TO MAKE SMARTER, DATA-DRIVEN DECISIONS AND OPTIMIZE THEIR OPERATIONS WITH CONFIDENCE.' 
        imgsrc='' 
      />
      <ContactUs title='CONTACT US'/>
    </div>
  );
}

export default LandingPage;
