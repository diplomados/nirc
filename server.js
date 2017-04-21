var servidor= require('socket.io').listen(9000);

servidor.sockets.on('connection', arranque);

function arranque(autor){
 	console.log("arrancado\n");
 	autor.on('escucharMensaje', emitir); //escucharMensaje del autor
}

function emitir(mensaje){
	console.log(mensaje+"\n");
	servidor.sockets.emit('notificarMensaje',mensaje+"*"); //notificarMensaje a los usuarios
}

console.log("Express server running at\n "+ 
			"=> http://localhost:9000/\nCTRL + C to shutdown");