import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER || 'solana_user',
    host: process.env.DB_HOST || 'dpg-cs4opmjqf0us73b5okv0-a.oregon-postgres.render.com',
    database: process.env.DB_NAME || 'solana',
    password: process.env.DB_PASSWORD || 'ssgNSqh18yElTjbg1a33EQs8rzyFxBHe',
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false,  // Aceitar qualquer certificado, necessário em ambientes não configurados
    },
});

// Exportando o pool como exportação padrão (default)
export default pool;
