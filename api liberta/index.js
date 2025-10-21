import express from 'express';
import pool from './servicos/conexao.js';
const app = express();

app.listen(8080,async () => {
    const data = new Date().toLocaleString("pt-BR");
    console.log(`Servidor iniciado na porta 8080 em: ${data}`);

    const conexao = await pool.getConnection();
    console.log(conexao.threadId)

    conexao.release();
});
