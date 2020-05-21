'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagdoc-controller');

router.get('/', controller.get);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.post);
router.delete('/:id', controller.delete);
router.put('/:id', controller.atualizar);


module.exports = router;