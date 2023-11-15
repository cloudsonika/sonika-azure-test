// index.js

// Import the New Relic module
const newrelic = require('newrelic');

// Your existing application code starts here
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
