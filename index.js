const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', (socket) => {
    setTimeout(() => {
        socket.send("hello i am from socket server")
    }, 5000)
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});