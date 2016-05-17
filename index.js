(function() {

"use strict";

exports.init = function(params, callback) {
	return callback();
};

exports.addScripts = function(scripts, callback) {
	scripts.concat(['plugins/nodebb-plugin-subcategories-checker/js/subcategories-checker.js']);
	return callback(null, scripts);
};

})();
