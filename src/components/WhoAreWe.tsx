import '../assets/all.css';

interface WhoAreWeProps {
    title: string;
    description1: string;
    description2: string;
    imgsrc: string;
}

const WhoAreWe = ({ title, description1, description2, imgsrc }: WhoAreWeProps) => {
    return (
        <div className='wowAll' id='WOW'>
            <div className='wowRow'>
                <div className='wow'>
                    <h3 className='wowA'>{title}</h3>
                    <h3 className='wowR'>ARE WE</h3>
                </div>
                <img src={imgsrc}></img>
            </div>
            <div className='wowRow'>
                <img src={imgsrc}></img>
                <div className='wow'>
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>
            </div>
        </div>
    );
}

export default WhoAreWe;
