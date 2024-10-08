import '../assets/all.css';

interface HeroProps {
    Src: string;
    mainTitle: string;
    secondTitle: string;
}

const Hero = ({ Src, mainTitle, secondTitle }: HeroProps) => {
    return (
        <div className='hero'>
            <div className='heroTexts'>
                <h1>{mainTitle}</h1>
                <h2>{secondTitle}</h2>
            </div>
            <img src={Src} />
        </div>
    );
}

export default Hero;
