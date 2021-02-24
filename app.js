const express = require('express');
const http = require('http');
const Game = require('./classes/Game');

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
      origin: '*',
    }
  });

io.on("connection", (socket) => {
    socket.emit('hello', 'world');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
});

let game = new Game(10, 10);
game.generateMap();

server.listen(port, () => console.log(`Listening on port ${port}`));
