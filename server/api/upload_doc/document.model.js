'use strict';

var mongoose = require('mongoose'),
 Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var Element = require('../document/element.model');
var User = require('../user/user.model');

var DocumentSchema = new Schema({
	  name: String,
  path: String,
  Commentaire: String,
  Taille: Number,
  categorie: String,
  NB_Telechargement:Number,
  date_depos:{ type: Date, default: Date.now },
  id_element: { type: ObjectId, ref: 'Element' },
    id_user: { type: ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Document', DocumentSchema);

