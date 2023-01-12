const express = require('express');
const router = express.Router();

//Informação de todos os Produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorno de todos os produtos'
    })
});

//Inserir e atualizar um produto
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto inserido com sucesso!'
    })
})

//Retorna apenas um produto específico
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você passou um ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
})

// Altera um produto
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto alterado com sucesso!'
    })
});

//Deleta um produto
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto deletado com sucesso!'
    })
});


module.exports = router;