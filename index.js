(function() {

"use strict";

var fs = require("fs"),
	path = require("path");

exports.init = function(params, callback) {
	var file = path.resolve(__dirname, '../../public/templates/category.tpl');
	var templateCategory = fs.readFileSync(file, { encoding: "utf-8" });
	console.log(templateCategory);
	templateCategory +=" \n<script>window.resyncSubcategoriesChecker()</script>\n";
	fs.writeFileSync(file, templateCategory);
	return callback();
};

exports.addScripts = function(scripts, callback) {
	scripts.concat(['plugins/nodebb-plugin-subcategories-checker/js/subcategories-checker.js']);
	return callback(null, scripts);
};

})();
