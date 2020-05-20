'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/vara-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/buscarPor/:nome', controller.getPorNome);
router.post('/', controller.post);
router.delete('/', controller.delete);


module.exports = router;