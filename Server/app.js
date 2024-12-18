const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
