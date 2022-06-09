const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const { registrosRoutes } = require('../routes');

app.use(cors());

app.use(bodyParser.json());

app.use(registrosRoutes);

module.exports = app;
