(function() {

"use strict";

var fs = require("fs"),
	path = require("path");

exports.init = function(params, callback) {
	var templateCategory = fs.readFileSync(path.resolve(__dirname, '../../public/templates/category.tpl'));
	console.log(templateCategory);
	return callback();
};

exports.addScripts = function(scripts, callback) {
	scripts.concat(['plugins/nodebb-plugin-subcategories-checker/js/subcategories-checker.js']);
	return callback(null, scripts);
};

})();
