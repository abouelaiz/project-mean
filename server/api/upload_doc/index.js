'use strict';

var express = require('express');
var controller = require('./upload_doc.controller');
var multer = require('multer');
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/document', controller.create_document);

router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.post('/file',multer({dest:'./uploads'}),controller.saveFile);

module.exports = router;