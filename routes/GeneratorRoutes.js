const router = require('express').Router();

const GeneratorController = require('../controllers/GeneratorController');

router.get('/generate/:type', GeneratorController.generate);

module.exports = router;