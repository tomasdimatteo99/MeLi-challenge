const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        //Creación de la aplicación Express.
        this.app = express();
        //Puerto.
        this.port = process.env.PORT;
        //Path de rutas.
        this.itemPath = '/api/items'

        //Middlewares.
        this.middlewares();

        //Rutas.
        this.routes();
    }

    middlewares(){
        //CORS - Protocolo de seguridad.
        this.app.use( cors() );
        //Lectura y parseo a JSON
        this.app.use( express.json() );
        //Tomamos el directorio publico.
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.itemPath, require('../routes/items') )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }

}

module.exports = Server;