const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const router = require('./routes');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./helpers/users');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3001;

const allowedCors = [
  'http://localhost:3000',
];

app.use(router);

app.use(cors({
  origin: allowedCors,
}));

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room});

    if (error) return callback(error);

    socket.emit('message', { user: 'chatBot', text: `${user.name} welcome to room ${user.room}` })
    socket.broadcast.to(user.room).emit('message', { user: 'chatBot', text: `${user.name} has joined.` })

    socket.join(user.room);

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

  });

  socket.on('disconnecting', () => {
    console.log('User had left!');
  })
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
