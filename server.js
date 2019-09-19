// Require dependencies
const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

// Create an express app
const app = express();

// Create a HTTP server
const httpServer = http.createServer(app);

// Start the server
httpServer.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});

// Declare routes
app.get('/hello-world', function(req, res) {
  res.send('<h1>Hello World!</h1>');
});
