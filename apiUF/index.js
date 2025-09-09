import express from 'express';
import { buscarUfs, buscarUfsPorNome, buscarUfsPorId, buscarUfPorSigla, buscarUfsPorInicial } from "./servicos/servico.js";

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

app.get('/ufs/:idUF', (req, res) => {
    const idUF = req.params.idUF;
    const uf = buscarUfsPorId(idUF);

    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(idUF))) {
        res.status(400).send({ erro: "Requisição inválida" });
    } else {
        res.status(404).send({ erro: "UF não encontrada" });
    }
});

app.get('/ufs/sigla/:sigla', (req, res) => {
    const sigla = req.params.sigla;
    const uf = buscarUfPorSigla(sigla);
    
    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ erro: "UF não encontrada pela sigla" });
    }
});

app.get('/ufs/:valor', (req, res) => {
    const valor = req.params.valor;
    let resultado = [];

    if (valor.length === 1) {
         resultado = buscarUfsPorInicial(valor);
    }
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: "UF não encontrada pela inicial" });
    }
});

app.listen(8080, () => {
    const data = new Date().toLocaleString("pt-BR");
    console.log(` Servidor iniciado na porta 8080 em: ${data}`);
});