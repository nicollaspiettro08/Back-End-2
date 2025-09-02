import express from 'express';
import { buscarUfs,buscarUfsPorNome,buscarUfsPorId } from "./servicos/servico.js";

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? buscarUfsPorNome(nomeUF) : buscarUfs();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ "erro": "Nenhuma UF encontrada" });
    }
});

app.get('/ufs/:idUF', (req, res) => {
    const uf = buscarUfsPorId(req.params.idUF);
    
    if (uf) {
        res.json(uf);
    } else if(isNaN(parseInt9req.params.idUF)){
        res.status(404).send({ "erro": "Requisição invalida" });
    }else {
        res.status(404).send({ "erro": "Uf não encontrada" });
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
});  