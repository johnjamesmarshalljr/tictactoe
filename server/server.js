const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=> {
    socket.on("gameBoard", squares => {
        console.log(squares)
    })
    socket.on("playTurn", (squares) => {
        socket.broadcast.emit('set-square', (squares))
    })
})

server.listen(3000)