import brasileirao from "./dados/colecao.js";
import express from 'express';

const app = express();


const buscarTimesPorNome = (nomeTimes) => {
    return brasileirao.filter(time =>
        time.nome.toLowerCase().includes(nomeTimes.toLowerCase())
    );
};

app.get('/times', (req, res) => {
    const nomeTimes = req.query.busca;
    const resultado = nomeTimes ? buscarTimesPorNome(nomeTimes) : brasileirao;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ "erro": "Nenhum time encontrado" });
    }
});


app.get('/times/:idTimes', (req, res) => {
    const idTimes = parseInt(req.params.idTimes);
    let mensagemErro = '';
    let time;

    if (!isNaN(idTimes)) {
        time = brasileirao.find(t => t.id === idTimes);
        if (!time) {
            mensagemErro = 'Time não encontrado';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (time) {
        res.json(time);
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }
});

app.listen(5050, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 5050 em: ' + data);
});
