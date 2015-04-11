/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var UploadDoc = require('./upload_doc.model');

exports.register = function(socket) {
  UploadDoc.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  UploadDoc.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('upload_doc:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('upload_doc:remove', doc);
}