import express from 'express';
import pool from '../db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Registrar novo usuário (sem hash)
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userExists = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'Usuário já existe' });
        }

        // Inserir a senha em texto simples (sem hash) - APENAS PARA TESTE
        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);

        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

// Login (sem hash)
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (user.rows.length === 0) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        // Comparar a senha em texto simples (sem hash) - APENAS PARA TESTE
        if (password !== user.rows[0].password) {
            return res.status(400).json({ error: 'Senha inválida' });
        }

        const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login bem-sucedido', token });
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

export default router;
