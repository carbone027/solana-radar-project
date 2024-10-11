import '../assets/all.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            // Enviar uma requisição para o backend
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });

            // Se o login for bem-sucedido, redirecionar o usuário
            if (response.status === 200) {
                navigate('/PredictionModel');  // Redirecionar para a página desejada
            }
        } catch (err: any) {
            // Exibir mensagem de erro se as credenciais forem inválidas
            setError('Usuário ou senha incorretos.');
        }
    };

    return (
        <div className='loginAll'>
            <div className='loginCard'>
                <div className='loginCardTop'>
                    <h2>WELCOME</h2>
                    <input
                        type="text"
                        placeholder='USER'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}  // Atualizar estado do username
                    />
                    <input
                        type="password"
                        placeholder='PASSWORD'
                        id='pass'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  // Atualizar estado da senha
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Exibir erro, se houver */}
                </div>
                <div className='loginCardBottom'>
                    <button onClick={handleLogin}>LOGIN</button>
                    <a><p>forgot password?</p></a>
                </div>
            </div>
        </div>
    );
}

export default Login;
