const { registrosService } = require('../services');
const { statusCode, generateMessageJSON } = require('../utils');

async function getRegistros(_req, res) {
  try {
    const registros = await registrosService.getRegistros();

    return res.status(statusCode.ok).json(registros);
  } catch(er) {
    return res.status(
      statusCode.internalServerError,
    ).json(generateMessageJSON("Internal Server Error"));
  }
}

module.exports = {
  getRegistros,
};
