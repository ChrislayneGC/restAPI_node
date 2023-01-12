const express = require('express');
const router = express.Router();

//Informação de todos os Pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorno de todos os pedidos!'
    });
});

//Inserir e atualizar um pedidos
router.post('/', (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'Pedido foi criado!',
        pedidoCriado: pedido
    });
});

//Retorna apenas um pedido específico
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id_pedido: id
    });
});

//Deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido deletado'
    });
});


module.exports = router;