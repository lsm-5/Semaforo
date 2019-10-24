const express = require('express');

const routes = express.Router();

routes.post('/semaforo/:id', (req,res) =>{
    const id = req.params.id;
    const { 
        tempoSinalVermelho, 
        tempoSinalVerde, 
        quantidadeVeiculos, 
        velocidadeVia, 
        distanciaVia  
    } = req.body;

    //fazer algo

    return res.json({tempoSinalVermelho:"X",tempoSinlaVerde:"Y"});

})

module.exports = routes;