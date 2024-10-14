import pool from './db.js';  // Certifique-se de que o caminho para o db.js está correto

// Função para mockar usuários (sem hash, para teste)
async function mockUsers() {
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', ['mock_user']);

        if (result.rows.length === 0) {
            console.log("Mocking users...");

            // Inserir o usuário mockado
            await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', ['mock_user', 'senha123']);

            console.log("Usuário mock_user adicionado com sucesso!");
        } else {
            console.log("Usuário mock_user já existe.");
        }
    } catch (err) {
        console.error("Erro ao mockar usuários:", err);
    }
}

export default mockUsers;  // Exportar a função
