// Require dependencies
const express = require('express');
const http = require('http');
const WS = require('ws');

const PORT = process.env.PORT || 3000;

// Create an express app
const app = express();

// Specify 'public' as the root directory from which to serve static assets
app.use(express.static('public'));

// Create a HTTP server
const httpServer = http.createServer(app);

// Create a WebSocket server and integrate it with our HTTP server
const websocketServer = new WS.Server({ server: httpServer });

// WebSocket events
websocketServer.on('connection', (websocket) => {
  console.log('A user connected');

  websocket.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    console.log('Message received: ', parsedMessage);
    websocketServer.clients.forEach((client) => {
      client.send(message);
    });
  });

  websocket.on('close', (code) => {
    console.log('User disconnected');
    console.log('Close code: ', code);
  });
});

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
