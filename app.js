const http = require('http-server');
const path = require('path');
require('dotenv').config();
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Define the path to your HTML file
    const filePath = path.join(__dirname, 'index.html');
  
    // Read the HTML file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Send a 500 status code if there's an error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
  
      // Send the HTML file with a 200 status code
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  });

// Start the server on port 8080
server.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
