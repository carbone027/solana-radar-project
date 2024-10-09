import '../assets/all.css';
import Spline from '@splinetool/react-spline/next';

interface HeroProps {
    mainTitle: string;
    secondTitle: string;
}

const Hero = ({  mainTitle, secondTitle }: HeroProps) => {
    return (
        <div className='hero'>
            <div className='heroTexts'>
                <h1>{mainTitle}</h1>
                <h2>{secondTitle}</h2>
            </div>
            <Spline scene="https://prod.spline.design/3hRqS61U2Dy-xagM/scene.splinecode"/>
        </div>
    );
}

export default Hero;
