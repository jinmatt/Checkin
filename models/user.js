/*
 * User model
 * @author Jinsu Mathew
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

// User scheme
var userSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	desig: String,
	level: Number,
	status: Number
});

// Init User model
mongoose.model('User', userSchema);