const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Enable CORS (only needed if you're making requests from different ports)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Cesium app running on port ${PORT}`);
});