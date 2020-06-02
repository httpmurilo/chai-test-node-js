'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/qtd-processo-controller');


router.get('/', controller.buscar);


module.exports = router;