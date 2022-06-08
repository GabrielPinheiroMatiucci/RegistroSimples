const { registrosService } = require('../services');
const { statusCode, generateMessageJSON } = require('../utils');

async function getRegistros(_req, res) {
  try {
    const registros = await registrosService.getRegistros();

    return res.status(statusCode.ok).json(registros);
  } catch(_er) {
    return res.status(
      statusCode.internalServerError,
    ).json(generateMessageJSON('Internal Server Error'));
  }
}

async function createRegistro(req, res) {
  const { name, date } = req.body;

  try {
    const result = await registrosService.createRegistro({ name, date });

    if (result === null) {
      return res.status(statusCode.badRequest).json(
        generateMessageJSON('Invalid Body'),
      );
    }

    return res.status(statusCode.created).end();
  } catch(_er) {
    return res.status(statusCode.internalServerError).json(
      generateMessageJSON('Internal Server Error'),
    );
  }
}

module.exports = {
  getRegistros,
  createRegistro,
};
