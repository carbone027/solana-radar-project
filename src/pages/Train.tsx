import '../assets/all.css';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const handleClusterClick = () => {
        navigate('/PredictionModel'); 
    };

    return (
    <div className='main-container'>
        <div className='main-card'>
            <div className='main-card-top'>
                <button className='main-button' onClick={handleClusterClick}>
                    RUN
                </button>
                <span className='input-label'>
                    INPUT TAGS SEPARATED BY COMMAS
                </span>
                <input className='input-field' placeholder='Enter XML tags'></input>
                <button className='upload-button'>
                    UPLOAD THE XML
                </button>
            </div>
            <div className='main-card-bottom'>
                <span className='output-label'>OUTPUT</span>
                <div className='output-box'>
                    <span className='output-placeholder'>nothing here yet</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Main;
