import { Header, Hero, ContactUs, WhatAreWe, WhoAreWe } from '../components';
import '../assets/all.css';

const LandingPage = () => {
  return (
    <div className='all'>
      <Header 
        logo='' 
        sectionName1='Sempre' 
        sectionName2='Sonhei' 
        sectionName3='Em' 
        sectionName4='Ser' 
        sectionName5='Batata' 
      />
      <Hero 
        Src='batatas.com.br' 
        mainTitle="36'ORACLE" 
        secondTitle='A NEW WAY OF SEEING MONEY' 
      />
      <WhatAreWe 
        title1='Sempre' 
        title2='a' 
        list1='b' 
        list2='c' 
        list3='d' 
        list4='e' 
        description='batatas' 
      />
      <WhoAreWe 
        title='Nem sempre' 
        description1='Humanos' 
        description2='Sempre serão' 
        imgsrc='' 
      />
      <ContactUs title='CONTACT US' />
    </div>
  );
}

export default LandingPage;
