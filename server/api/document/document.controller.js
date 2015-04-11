'use strict';

var _ = require('lodash');
var Semestre = require('./semestre.model');
var Module = require('./module.model');
var Element = require('./element.model');

// Get list of documents
exports.index = function(req, res) {
 Semestre.find({ 'ecole': 'Ensias' }, 'name ', function (err, documents) {
    if(err) { return handleError(res, err); }
    return res.json(200, documents);
  });
};

// Get a single document
exports.show = function(req, res) {
 console.log(req.params.id)
  Module.find({ 'id_semestre': req.params.id }, function (err, documents) {
    if(err) { return handleError(res, err); }
    if(!documents) { return res.send(404); }
    return res.json(documents);
  });
};


exports.element_module = function(req, res) {
 console.log(req.params.id)
     Element.find({ 'id_module': req.params.id  }, function (err, documents) {
    if(err) { return handleError(res, err); }
    if(!documents) { return res.send(404); }
    return res.json(documents);
});
};
// Creates a new document in the DB.
exports.create = function(req, res) {
          console.log("req",req.body)

  Element.create(req.body, function(err, document) {
        console.log("semestre",document)

    if(err) { return handleError(res, err); }
    return res.json(201, document);
  });
};

// Updates an existing document in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Semestre.findById(req.params.id, function (err, document) {
    if (err) { return handleError(res, err); }
    if(!document) { return res.send(404); }
    var updated = _.merge(document, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, document);
    });
  });
};

// Deletes a document from the DB.
exports.destroy = function(req, res) {
  Semestre.findById(req.params.id, function (err, document) {
    if(err) { return handleError(res, err); }
    if(!document) { return res.send(404); }
    document.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}