'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentSchema = new Schema({
  name: String,
  ecole: String
});

module.exports = mongoose.model('Semestre', DocumentSchema);
