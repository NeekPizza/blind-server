const express = require('express');
const http = require('http');

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

server.listen(port, () => console.log(`Listening on port ${port}`));
