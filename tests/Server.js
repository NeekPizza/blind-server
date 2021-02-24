const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");
const assert = require("chai").assert;

describe("Server", () => {
  let io, serverSocket, clientSocket;

  before((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  after(() => {
    io.close();
    clientSocket.close();
  });

  it("should work", (done) => {
    clientSocket.on("hello", (arg) => {
      assert.equal(arg, "world");
      done();
    });
    serverSocket.emit("hello", "world");
  });
});