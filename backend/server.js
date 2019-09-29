var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3001);

const msgs = [];

io.on('connection', function (socket) {
    socket.on('msg', function (data) {
        msgs.push(data)
        io.emit('chat', msgs);
    });
    io.emit('chat', msgs);
});