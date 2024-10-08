import { useNavigate } from 'react-router-dom';

function Train(){
        const navigate = useNavigate();

        const handleClusterClick = () => {
          navigate('/PredictionModel'); // Redireciona para a página de login
        };
        
    return(
        <button onClick={handleClusterClick}></button>
    )
}

export default Train