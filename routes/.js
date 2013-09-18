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
 * PUT user
 */
exports.add = function(req, res) {
	var user = new User({ name: "Amy Smith", emp_id: 2, email: "amy@mindhelix.com", desig: "Dummy", level: 1, status: 1 });
	user.save(function(err, user) {
		if(err) {
			res.send("Something went wrong");
		} else {
			res.send("New user added");
		}
	});
};