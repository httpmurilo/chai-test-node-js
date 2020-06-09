'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-financial-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.add);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);


module.exports = router;