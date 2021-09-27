

const socketController = (socket) => {

    console.log('cliente conectado', socket.id)
    //Los ids socket.id es muy volatil 

    //Para desconectar despues de que se recarga la pagina web
    socket.on('disconnect', ()=>{
        //console.log('Cliente Desconectado', socket.id)
    })
    //detectar la comunicacion del cliente
    socket.on('enviar-mensaje', (msg, callback)=>{ // el segundo arg es un callback que hace red al callback del cliente 'id' diciendo, corroborandoq que todo va bien

        const id = 12312
        callback({id, fecha : new Date().getTime()}) // envio mensaje de confirmacion y solo el cliente recibio la info no lo mando broadcast
        //enviar mensaje bgroadcast
        socket.broadcast.emit('enviar-mensaje',msg)  
    })
}

module.exports = {
    socketController
}