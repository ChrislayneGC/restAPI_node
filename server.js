//Vai ser executado antes de tudo, e aqui que inclui as informações de serviço de transição HTTP
//usando a biblioteca do Express.

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app); 

app.listen(port);
