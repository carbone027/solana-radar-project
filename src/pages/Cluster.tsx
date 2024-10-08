import { useNavigate } from 'react-router-dom';

function Cluster(){
    const navigate = useNavigate();

    const handleTrainClick = () => {
      navigate('/TrainModel'); // Redireciona para a página de login
    };
    
    return(
        <button onClick={handleTrainClick}></button>
    )
}

export default Cluster