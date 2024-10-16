import React, { useState } from 'react';

function Cluster() {
    const [file, setFile] = useState<File | null>(null);
    const [features, setFeatures] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!file || features.trim() === '') {
            console.error('Arquivo ou features não foram fornecidos!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const featuresArray = features.split(',').map(feature => feature.trim()).filter(Boolean);
        if (featuresArray.length === 0) {
            console.error('Nenhuma feature válida fornecida!');
            return;
        }

        try {
            const uploadResponse = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: formData
            });

            const uploadData = await uploadResponse.json();
            const filename = uploadData.filename;

            const mutation = {
                query: 
                    mutation filterAndConvertXml($features: [String!]!, $file: String!) {
                        filterAndConvertXml(features: $features, file: $file) {
                            success
                            message
                            data {
                                tag
                                value
                            }
                        }
                    }
                ,
                variables: {
                    features: featuresArray,
                    file: filename
                }
            };

            // Faz a requisição GraphQL
            const graphQLResponse = await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mutation)
            });

            const resultData = await graphQLResponse.json();

            if (resultData.errors) {
                console.error('Erros na requisição:', resultData.errors);
                setResult('Erro: ' + resultData.errors[0].message);
            } else {
                setResult(resultData.data.filterAndConvertXml.data);
            }
        } catch (error) {
            console.error('Erro durante a requisição:', error);
            setResult('Erro ao realizar a operação.');
        }
    };

    // Função para renderizar os resultados em uma tabela
    const renderResult = () => {
        if (!result || !Array.isArray(result)) return null;

        return (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #000' }}>Tag</th>
                        <th style={{ border: '1px solid #000' }}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #000' }}>{item.tag}</td>
                            <td style={{ border: '1px solid #000' }}>{item.value.trim()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h1>Upload de Arquivo XML</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="file">Escolha um arquivo XML:</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".xml"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} 
                    required
                /><br /><br />

                <label htmlFor="features">Features (separadas por vírgula):</label>
                <input
                    type="text"
                    id="features"
                    name="features"
                    placeholder="feature1, feature2"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    required
                /><br /><br />

                <button type="submit">Enviar</button>
            </form>

            <h2>Resultado</h2>
            <pre>{renderResult()}</pre>
        </div>
    );
}

export default Cluster;