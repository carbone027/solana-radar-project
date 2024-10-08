import '../assets/all.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleClusterClick = () => {
        navigate('/PredictionModel'); // Redireciona para a página de login
    };

    return (
    <div className='loginAll'>
        <div className='loginCard'>
            <div className='loginCardTop'>
                <h2>WELCOME</h2>
                <input placeholder='USER'></input>
                <input placeholder='PASSWORD'></input>
            </div>
            <div className='loginCardBottom'>
                <button></button>
                <a><p>forgot password?</p></a>
            </div>
        </div>
        <button onClick={handleClusterClick}></button>
    </div>
  );
}

export default Login;
