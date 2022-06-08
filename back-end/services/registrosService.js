const { registrosModel } = require('../models');
const { validateBody } = require('../utils');

async function getRegistros() {
  const registros = await registrosModel.getRegistros();

  return registros;
}

async function createRegistro({ name, date }) {
  const validBody = validateBody({ name, date });

  if (validBody === null) return null;

  const result = registrosModel.createRegistro({ name, date });

  return result;
}

module.exports = {
  getRegistros,
  createRegistro,
};
