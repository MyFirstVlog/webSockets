//refs del html 

// const lblOnline  = document.getElementById('lblOnline') 
// const lblOffline = document.getElementById('lblOffline')
const txtMensaje =  document.querySelector('#txtMensaje')
const btnEnviar  = document.querySelector('#btnEnviar')
const lblOnline  = document.querySelector('#lblOnline') 
const lblOffline = document.querySelector('#lblOffline')

const socket = io() //socket del cliente, con esto ya ejecuto el socket del server 

//poner listenes de cambios o eventos

socket.on('connect', ()=>{
    //console.log('conectado')
    lblOffline.style.display = 'none' //para que aparexcan o no en la pantalla
    lblOnline.style.display = ''

}) //on es para escuchar eventos
socket.on('disconnect', ()=>{
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
    console.log('Desconectado del servidor')
})

socket.on('enviar-mensaje', (msg)=>{
    console.log(msg)
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id : '212132',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=> {
        console.log('Desde el server:' , id)
    }) //no poner camelcase ni caracteres en el evento que vamos a emitir
})