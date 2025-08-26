import brasileirao from "./dados/colecao.js";
import express from 'express';

const app = express();

app.get('/times',(req,res) => {
    res.json(brasileirao)
});

app.get('/times/idTimes',(req,res) => {
    const idTimes = parseInt(req.params.idTimes);
    const times = brasileirao.find(u => u.id == idTimes);
    res.json(times);
});

app.listen(5050,() =>{
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em:' +data)
});  