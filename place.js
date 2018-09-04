var mongoose = require('mongoose')
var schema = mongoose.Schema

var placeScema = new Schema({
	name: String,
	description: String,
	country: String,
	categories: [],
	createdAt: {type:Date,default:Date.now}

});

module.exports = mongoose.model('Place', PlaceSchema);