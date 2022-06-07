const app = require('express')();
const bodyParser = require('body-parser');
const { registrosRoutes } = require('../routes');

app.use(bodyParser.json());

app.use(registrosRoutes);

module.exports = app;
