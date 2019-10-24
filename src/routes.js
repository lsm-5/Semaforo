const express = require('express');

const routes = express.Router();

routes.post('/semaforo/:id', (req,res) =>{
    const id = req.params.id;

    return res.json({message:id});
})

module.exports = routes;