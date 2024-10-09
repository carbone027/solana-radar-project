import '../assets/all.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleClusterClick = () => {
        navigate('/PredictionModel'); 
    };

    return (
    <div className='loginAll'>
        <div className='loginCard'>
            <div className='loginCardTop'>
                <h2>WELCOME</h2>
                <input placeholder='USER'></input>
                <input placeholder='PASSWORD' id='pass'></input>
            </div>
            <div className='loginCardBottom'>
                <button onClick={handleClusterClick}>LOGIN</button>
                <a><p>forgot password?</p></a>
            </div>
        </div>
    </div>
  );
}

export default Login;
