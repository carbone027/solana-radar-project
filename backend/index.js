import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';  // Certifique-se de adicionar .js no final
import dotenv from 'dotenv';
import mockUsers from './mockUsers.js';  // Corrija o caminho se necessário

dotenv.config();  // Carregar as variáveis de ambiente

const app = express();

// Habilitar CORS
app.use(cors({
    origin: 'http://localhost:5173',  // Permitir o frontend acessar o backend
}));

// Middleware para parsear JSON
app.use(express.json());

// Chamar a função que mocka usuários ao iniciar o servidor
mockUsers();  // Isso garante que os usuários serão criados automaticamente

// Rotas de autenticação
app.use('/api/auth', authRoutes);  // Usando as rotas importadas

// Configurar o servidor para rodar na porta 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
