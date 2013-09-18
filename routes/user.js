/*
 * Module dependencies
 */
require('../models/user');
var mongoose = require('mongoose')
  , User = mongoose.model('User');


/*
 * GET users listing.
 */

exports.list = function(req, res){
	User.find(function(err, users) {
		if(err) {
			res.send("Unable to reterive the users list");
		} else {
			res.render("users", { title: "Users", users: users });
		}
	});
};


/*
 * Create new user page
 */
exports.new = function(req, res) {
	res.render("new_user");
};


/*
 * Create new user
 * POST method
 */
exports.create = function(req, res) {
	var user = new User(req.body);
	user.save(function(err, user) {
		if(err) {
			res.json({ status: 0, message: "Something went wrong" });
		} else {
			res.json({ status: 1, message: "New user created" });
		}
	});
};