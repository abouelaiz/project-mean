'use strict';

var _ = require('lodash');
var UploadDoc = require('./upload_doc.model');
var Document = require('./document.model');
// Get list of upload_docs
exports.index = function(req, res) {
  UploadDoc.find(function (err, upload_docs) {
    if(err) { return handleError(res, err); }
    return res.json(200, upload_docs);
  });
};


//une fois un fichier uploader on l envoi au serveur pui on envoie les infos au clien
exports.saveFile = function(req, res) {
      var respon={nom:req.files.file.originalname,
        path:req.files.file.path,
        size:req.files.file.size
      }
      res.send(respon);
 };
// Get a single upload_doc
exports.show = function(req, res) {
  UploadDoc.findById(req.params.id, function (err, upload_doc) {
    if(err) { return handleError(res, err); }
    if(!upload_doc) { return res.send(404); }
    return res.json(upload_doc);
  });
};

// Creates a new upload_doc in the DB.
exports.create = function(req, res) {
  UploadDoc.create(req.body, function(err, upload_doc) {
    if(err) { return handleError(res, err); }
    return res.json(201, upload_doc);
  });
};

//creat pour document
exports.create_document = function(req, res) {

Document.create(req.body, function(err, doc) {
    if(err) { return handleError(res, err); }
    return res.json(201, doc);
  });
};



// Updates an existing upload_doc in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  UploadDoc.findById(req.params.id, function (err, upload_doc) {
    if (err) { return handleError(res, err); }
    if(!upload_doc) { return res.send(404); }
    var updated = _.merge(upload_doc, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, upload_doc);
    });
  });
};

// Deletes a upload_doc from the DB.
exports.destroy = function(req, res) {
  UploadDoc.findById(req.params.id, function (err, upload_doc) {
    if(err) { return handleError(res, err); }
    if(!upload_doc) { return res.send(404); }
    upload_doc.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}