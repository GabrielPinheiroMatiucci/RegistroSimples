const router = require('express').Router();
const { registrosController } = require('../controllers');

router.get('/registros', registrosController.getRegistros);
router.post('/registros', registrosController.createRegistro);

module.exports = router;
