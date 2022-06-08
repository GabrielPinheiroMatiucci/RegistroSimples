const { registrosModel } = require('../models');

async function getRegistros() {
  const [registros] = await registrosModel.getRegistros();

  return registros;
}

module.exports = {
  getRegistros,
};
