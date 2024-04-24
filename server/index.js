const express = require("express");
const { createServer } = require("http");
const { join } = require("path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});


io.on("connection", (socket) => {
    console.log('logged')
    socket.on("chat message", (msg) => {
      console.log("message: " + msg);
    });

    socket.on('disconnect', () => console.log('disconnected'))
});




server.listen(3000, () => {
  console.log("connected : 3000");
});
