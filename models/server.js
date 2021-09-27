const express = require('express')
const cors = require('cors')
const { socketController } = require('../sockets/controller')
require('dotenv').config()
class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        //implmentaciòn del web sockets
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server); //info de los sockets conectados

        this.path = {}

        //Middlewares funcion que siempre se ejecuta cuando levantemos el servidor
        this.middlewares()
        //Rutas de mi app
        this.routes()

        //Manejo de eventos por sockets

        this.sockets()
    }

    middlewares(){ //Middlewares funcion que siempre se ejecuta cuando levantemos el servidor
        //cors
        this.app.use(cors())
        
        //Directorio publico
        this.app.use(express.static('public'))

        //manejar el file upload


    }

    routes(){
        //this.app.use(this.path.auth, require('../routes/auth'))
    }

    sockets(){
        this.io.on("connection", socketController)
        
    }


    listen(){
        //ya no es this.app.listen
        this.server.listen(this.port, () => {
            console.log(`App listening at http://localhost:${this.port}`)
          })
    }

    async dbConnection() {
        await dbConnection()
    }
}

module.exports = Server