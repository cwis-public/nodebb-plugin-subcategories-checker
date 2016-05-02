(function() {

"use strict";

var fs = require("fs"),
	path = require("path");

exports.init = function(params, callback) {
	var file = path.resolve(__dirname, '../../public/templates/category.tpl');
	
	var doit = function() {
		try {
			var templateCategory = fs.readFileSync(file, { encoding: "utf-8" });
			if(!templateCategory.match(/resyncSubcategoriesChecker/)) {
				templateCategory +=" \n<script>window.resyncSubcategoriesChecker()</script>\n";
				fs.writeFileSync(file, templateCategory);
			}
		} catch(e) {
			console.log("Caught error loading category.tpl: " + e);
			return setTimeout(doit, 100);
		}
		console.log("Success overriding category.tpl");
		return callback();
	};
	doit();
};

exports.addScripts = function(scripts, callback) {
	scripts.concat(['plugins/nodebb-plugin-subcategories-checker/js/subcategories-checker.js']);
	return callback(null, scripts);
};

})();
