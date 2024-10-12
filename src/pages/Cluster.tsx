import React, { useState } from 'react';
import '../assets/all.css';
import pngIcon from '../assets/Vector.png';
import CentImage from '../assets/atencion.png';

function Cluster() {
    const [file, setFile] = useState<File | null>(null);
    const [features, setFeatures] = useState('');
    const [result, setResult] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // O restante do código de envio de formulário
    };

    return (
        <div className='main-container'>
            <div className='flex-column-c'>
                <button className='run' onClick={handleSubmit}>
                <span className='runtext'>RUN</span>
                </button>
                <span className='input-tags-separated'>
                    INPUT TAGS SEPARATED BY COMMAS
                </span>
                <input
                    type="text"
                    className='rectangle-1'
                    placeholder="feature1, feature2"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    required
                />
                <span className='upload-the-xml'>UPLOAD THE XML</span>
                
                {/* Botão personalizado de upload */}
                <label htmlFor="file-upload" className="custom-upload-button">
                <img src={pngIcon} alt="PNG Icon" className="png-icon" />
                </label>
                
                <input
                    type="file"
                    id="file-upload"
                    accept=".xml"
                    onChange={handleFileChange}
                    required
                />
            </div>
            <div className='rectangle-3'>
    <span className='output'>OUTPUT</span>
    <div className="image-container">
        <img src={CentImage} alt="Result" className="centered-image" />
    </div>
    <span className='nothing-here-yet'>{result ? result : "nothing here yet"}</span>
</div>
        </div>

    );
}

export default Cluster;
