const express = require('express');
const socketio = require('socket.io');
const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const router = require('./router');
const app = express();

const server = http.createServer(app);


const { addUser, removeUser, getUser, getUserInRoom } = require('./User');
const { all } = require('./router');

const io = socketio(server);
io.on('connection', (socket) => {
    console.log('We have a new connection!!!');
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) return callback({ error });
        socket.emit('message', { user: 'admin', text: `${user.name}, wellcome to the room ${user.room}` });
        socket.broadcast.to(room).emit('message', { user: 'admin', text: `${user.name}, has Joined!` });
        var allusers = getUserInRoom(room);
        socket.emit('allusers',allusers);
        io.to(room).emit('allusers',allusers);
        socket.join(user.room);
    });


    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { user: user.room, users: getUserInRoom(user.room) });
        callback();
    })


    //disconnect when close brower
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if (user) {
            console.log("left");
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
        }
    })
});

app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));