(function() {

"use strict";

var fs = require("fs");

exports.init = function(custom_routes, callback) {
	console.log("Adding routes");
	var templateCategory = fs.readFileSync(path.resolve(__dirname, '../../public/templates/category.tpl'));
	console.log(templateCategory);
	templateCategory += "<script> alert('hello'); </script>";
	console.log(custom_routes);
	custom_routes.templates.push({ template: "category.tpl", content: templateCategory });
	return callback(null, custom_routes);
};

exports.addScripts = function(scripts, callback) {
	scripts.concat(['plugins/nodebb-plugin-subcategories-checker/js/subcategories-checker.js']);
	return callback(null, scripts);
};

})();
