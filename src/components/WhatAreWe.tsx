import '../assets/all.css';

interface WhatAreWeProps {
    title1: string;
    title2:string;
    description: string;
}

const WhatAreWe = ({ title1, title2 }: WhatAreWeProps) => {
    return (
        <div className='waw' id='WAW'>
            <h2 className='ropa'>{title1}</h2>
            <h2 className='archivo'>{title2}</h2>
            <ul className='wawDescription'>
                <li>A SYSTEM THAT RECIVES THE <br></br> DATABASES SENT BY THE BANK</li>
                <li>STORES DATA VIA ETHEREUM <br></br> BLOCKCHAIN</li>
                <li>USES AI TO CATEGORIZE PROFILES <br></br> AND PREDICT BEHAVIORS</li>
                <li>PROVIDES VALUABLE INSIGHTS</li>
            </ul>
        </div>
    );
}

export default WhatAreWe;
