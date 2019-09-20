// Require dependencies
const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

// Create an express app
const app = express();

// Specify ‘public’ as the root directory from which to serve static assets
app.use(express.static('public'));

// Create a HTTP server
const httpServer = http.createServer(app);

// Start the server
httpServer.listen(PORT, () => console.log(`Listening on ${PORT}`));
