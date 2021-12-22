const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=> {
    socket.on("playTurn", (squares) => {
        io.emit('set-square', (squares))
    })
    socket.on("winner", (squares) => {
        socket.disconnect()
        // console.log('game over')
        // io.emit('won', (squares))
    })
    socket.on("clear", (squares) => {
        io.emit('restart', (squares))
        // console.log('game over')
        // io.emit('won', (squares))
    })
    socket.on('disconnect', function(){
        delete socket; 
    })
    
})

server.listen(3000)