const express = require('express');

const routes = express.Router();

routes.post('/semaforo/:id', (req,res) =>{
    const id = req.params.id;
    const { 
        tempoSinalVermelho, 
        tempoSinalVerde,
        tempoSinalAmarelo,
        quantidadeVeiculos, 
        velocidadeVia, 
        distanciaVia  
    } = req.body;


    var verm = 50, verde = 60, ama=5;

    ama =  (velocidadeVia/5.6) - 10;
    verm = ((distanciaVia + quantidadeVeiculos) / velocidadeVia)*0.13;
    verde = (tempoSinalAmarelo/1) + (tempoSinalVermelho/1) + (tempoSinalVerde * 0.666)

    return res.json({tempoSinalVermelho:verm,tempoSinalVerde:verde, tempoSinalAmarelo:ama});

})

module.exports = routes;