const router = require('express').Router();
const { registrosController } = require('../controllers');

router.get('/registros', registrosController.getRegistros);

module.exports = router;
