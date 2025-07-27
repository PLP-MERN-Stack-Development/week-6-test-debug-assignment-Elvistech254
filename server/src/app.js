const express = require('express');
const hello = require('./routes/hello');
const profile = require('./routes/profile');

const app = express();
app.use(express.json());

app.use('/api', hello);
app.use('/api', profile); // new protected route

module.exports = app;
