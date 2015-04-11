'use strict';

var mongoose = require('mongoose'),
 Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var Semestre = require('./semestre.model');

var DocumentSchema = new Schema({
	sigle: String,
  name: String,
  responsable: String,
  id_semestre: { type: ObjectId, ref: 'Semestre' }
});

module.exports = mongoose.model('Module', DocumentSchema);

