import '../assets/all.css';

interface WhatAreWeProps {
    title1: string;
    title2:string;
    list1:string;
    list2:string;
    list3:string;
    list4:string;
    description: string;
}

const WhatAreWe = ({ title1, title2, list1, list2, list3, list4 }: WhatAreWeProps) => {
    return (
        <div className='waw' id='WAW'>
            <h2>{title1}</h2>
            <h2>{title2}</h2>
            <ul className='wawDescription'>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
            </ul>
        </div>
    );
}

export default WhatAreWe;
