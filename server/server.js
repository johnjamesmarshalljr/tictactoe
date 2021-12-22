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
        console.log('game over')
        io.emit('won', (squares))
    })
    
})

server.listen(3000)