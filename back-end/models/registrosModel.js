const connection = require('./connection');
const { registrosQueries } = require('../utils');

async function getRegistros() {
  const response = await connection.execute(registrosQueries.getRegistros);

  return response;
}

module.exports = {
  getRegistros,
};
