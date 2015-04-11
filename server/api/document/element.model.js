'use strict';

var mongoose = require('mongoose'),
 Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var Module = require('./module.model');

var ElementSchema = new Schema({
  name: String,
  sigle: String,
  responsable: String,
  coefficient: Number,
  VH_Td:Number,
  VH_Tp:Number,
  VH_Cours:Number,
  filiaire:String,
  id_module: { type: ObjectId, ref: 'Module' }
});

module.exports = mongoose.model('Element', ElementSchema);

