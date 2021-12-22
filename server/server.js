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
        socket.broadcast.emit('get-squares', squares)
    })
})

server.listen(3000)
