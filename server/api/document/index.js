'use strict';

var express = require('express');
var controller = require('./document.controller');

var router = express.Router();

router.get('/', controller.index);
/*router.get('/module', controller.module);
router.get('/element', controller.element);*/
router.get('/:id', controller.show);
router.get('/element/:id', controller.element_module);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;