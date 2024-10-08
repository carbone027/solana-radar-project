import '../assets/all.css'
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    logo: string;
    sectionName1: string;
    sectionName2: string;
    sectionName3: string;
    sectionName4: string;
    sectionName5: string;
}

const Header: React.FC<HeaderProps> = ({ logo, sectionName1, sectionName2, sectionName3, sectionName4, sectionName5 }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login'); // Redireciona para a página de login
    };

    return (

    <nav className='header'>
        <img src={logo}></img>
        <ul className='headerLinks'>
            <a href='#WAW'><li>{sectionName1}</li></a>
            <a href='#WOW'><li>{sectionName2}</li></a>
            <a href='#CONTACT'><li>{sectionName3}</li></a>
            <a><li>{sectionName4}</li></a>
            <a><li>{sectionName5}</li></a>
        </ul>
        <button onClick={handleLoginClick}></button>
    </nav>
  )
}
export default Header