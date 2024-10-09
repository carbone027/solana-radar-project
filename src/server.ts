import "reflect-metadata";
import path from "node:path";
import express from "express";
import multer from "multer";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { XMLProcessingResolver } from "./resolvers/XMLProcessingResolver";
import cors from 'cors';
import fs from 'fs';

const outputDir = path.join(__dirname, '../../output');

// Verifica se a pasta 'output' existe, se não, cria
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const upload = multer({ dest: 'uploads/' });

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [XMLProcessingResolver],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    });
    
    const app = express();

    app.use(cors({
        origin: 'http://127.0.0.1:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }));
    app.use(express.static(path.join(__dirname, '../'))); // Serve arquivos estáticos do diretório raiz
    // Rota para upload de arquivos
    app.post('/upload', upload.single('file'), (req, res) => {
        if (!req.file) {
            console.error('Nenhum arquivo foi enviado.');
            return res.status(400).send('Nenhum arquivo foi enviado.');
        }
        console.log(`Arquivo recebido: ${req.file.filename}`);
        res.send({ filename: req.file.filename });
    });

    // Cria o Apollo Server com Express
    const server = new ApolloServer({
        schema,
    });

    await server.start();
    server.applyMiddleware({ app });

    // Sobe o servidor na porta 4000
    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server is running on http://localhost:4000/graphql`);
    });
}

bootstrap();
