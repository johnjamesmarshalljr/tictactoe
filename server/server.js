const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=> {
    socket.on('custom-event', (number, string, obj) => {
        console.log(number, string, obj)
    })
    socket.on("gameBoard", squares => {
        console.log(squares)
    })
    socket.on("play", index => {
        console.log("server received", index)
        socket.broadcast.emit("play", index)
    })
})



server.listen(3000)

// const io = require('socket.io')(8080)

// io.on('connection', socket =>  {
//     console.log(socket.id)
//     socket.on('custom-event', (number, string, obj) => {
//         console.log(number, string, obj)
//     })
// })