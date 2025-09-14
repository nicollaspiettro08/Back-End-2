import colecaoJogos from "./dados/dados.js";
import express from "express";

const app = express();

app.get('/jogos', (req,res)=>{
    res.json(colecaoJogos);
})

app.listen(4040,()=>{
    const data = new Date();
    console.log('servidor iniciado na porta 4040 em : ${data}');
})