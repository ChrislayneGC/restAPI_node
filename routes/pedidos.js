const express = require('express');
const router = express.Router();

//Informação de todos os Pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorno de todos os pedidos!'
    })
});

//Inserir e atualizar um pedidos
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido foi criado!'
    })
})

//Retorna apenas um pedido específico
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'DEtalhes do pedido',
        id_pedido: id
    });
})

//Deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido deletado'
    })
});


module.exports = router;