import express from 'express';
import {buscarUfs, buscarUfsPorNome, buscarUfsPorId, buscarUfPorSigla, buscarUfsPorInicial } from "./apiUF/servicos/servico.js";

const app = express();


app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? buscarUfsPorNome(nomeUF) : buscarUfs();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: "Nenhuma UF encontrada" });
    }
});


app.get('/ufs/id/:idUF', (req, res) => {
    const idUF = req.params.idUF;
    
    if (isNaN(parseInt(idUF))) {
        return res.status(400).json({ erro: "Requisição inválida" });
    }

    const uf = buscarUfsPorId(idUF);

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ erro: "UF não encontrada" });
    }
});


app.get('/ufs/sigla/:sigla', (req, res) => {
    const siglaUF = req.params.sigla;
    const uf = buscarUfPorSigla(siglaUF);
    
    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ erro: "UF não encontrada pela sigla" });
    }
});


app.get('/ufs/inicial/:letra', (req, res) => {
    const letra = req.params.letra;
    const resultado = buscarUfsPorInicial(letra);

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: "UF não encontrada pela inicial" });
    }
});


app.listen(8080, () => {
    const data = new Date().toLocaleString("pt-BR");
    console.log(`Servidor iniciado na porta 8080 em: ${data}`);
});
