const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const cors = require('cors');

const PORT = process.env.PORT || 3001;

const router = require('./routes');

const allowedCors = [
  'http://localhost:3000',
];

app.use(router);

app.use(cors({
  origin: allowedCors,
}));

io.on('connection', (socket) => {
  console.log('We have a new connection!');

  socket.on('disconnecting', () => {
    console.log('User had left!');
  })
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
