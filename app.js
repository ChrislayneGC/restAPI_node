const express = require('express')
const app = express();

app.use((req, res, next) => {  //requiseção / resposta / next(chamar outro método)
    res.status(200).send({ //http.cat
        mensagem: 'Ok, Deu certo!'
    }); 
});

module.exports = app;