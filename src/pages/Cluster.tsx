import React, { useState } from 'react';
import '../assets/all.css';
import pngIcon from '../assets/Vector.png';

function Cluster() {
    const [file, setFile] = useState<File | null>(null);
    const [features, setFeatures] = useState('');
    const [success, setSuccess] = useState(false);  // Estado para controlar o pop-up de sucesso

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        // Código para o submit (você pode adicionar sua lógica de envio aqui)
        
        // Exibir o pop-up de sucesso
        setSuccess(true);

        // Opcional: Esconder o pop-up de sucesso após alguns segundos
        setTimeout(() => {
            setSuccess(false);
        }, 3000); // Esconde após 3 segundos
    };

    return (
        <div className='main-container'>
            <div className='flex-column-c'>
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

                <button className='run' onClick={handleSubmit}>
                    <span className='runtext'>SEND</span>
                </button>
            </div>

            {/* Exibir pop-up de sucesso se o estado 'success' for true */}
            {success && (
                <div className='success-popup'>
                    <p>Success!</p>
                </div>
            )}
        </div>
    );
}

export default Cluster;
