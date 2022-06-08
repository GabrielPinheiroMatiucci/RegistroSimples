const connection = require('./connection');
const { registrosQueries } = require('../utils');

async function getRegistros() {
  const response = await connection.execute(registrosQueries.getRegistros);

  return response[0];
}

async function createRegistro({ name, date }) {
  const response = await connection.execute(
    registrosQueries.createRegistro,
    [name, date],
  );

  if (response[0].affectedRows === 1) return true;

  return null;
}

module.exports = {
  getRegistros,
  createRegistro,
};
