import '../assets/all.css'
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    sectionName1: string;
    sectionName2: string;
    sectionName3: string;
}

const Header: React.FC<HeaderProps> = ({ sectionName1, sectionName2, sectionName3}) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login'); // Redireciona para a página de login
    };

    return (

    <nav className='header'>
        <img src='../assets/logolight.png'></img>
        <ul className='headerLinks'>
            <a href='#WAW'><li>{sectionName1}</li></a>
            <a href='#WOW'><li>{sectionName2}</li></a>
            <a href='#CONTACT'><li>{sectionName3}</li></a>
        </ul>
        <button onClick={handleLoginClick}>LOGIN</button>
    </nav>
  )
}
export default Header