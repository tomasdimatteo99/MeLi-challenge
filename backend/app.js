require('dotenv').config();

const Server = require('./models/server');

//Instancia del servidor.
const server = new Server();

server.listen();