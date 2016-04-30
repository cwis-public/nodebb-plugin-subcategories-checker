(function() {

"use strict";

var fs = require("fs");

exports.addRoute = function(custom_routes, callback) {
	var templateCategory = fs.readFileSync(path.resolve(__dirname, '../../public/templates/category.tpl'));
	templateCategory += "<script> alert('hello'); </script>";
	custom_routes.templates.push({ template: "category.tpl", content: templateCategory });
	return callback(null, custom_routes);
};

exports.addScripts = function(scripts, callback) {
	return scripts.concat(['plugins/nodebb-plugin-subcategories-checker/js/subcategories-checker.js']);
};

})();
