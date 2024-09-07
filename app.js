const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket server is running...\n");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", (socket) => {
    console.log("user disconnected:", socket.id);
  });
});

server.listen(3001, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log("WebSocket server is running on port 3001.");
  }
});
