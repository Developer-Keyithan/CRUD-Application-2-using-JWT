const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const deviceRoutes = require('./Routes/deviceRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/devices', deviceRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;


