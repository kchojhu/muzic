module.exports = function() {
	var resourceDir = 'src/main/resources';
	var appDir = resourceDir + "/app";
	var jsFiles = appDir + "/**/*.js";
	var config = {
			appDir : appDir,
			jsFiles: jsFiles
	};
};