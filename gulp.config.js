module.exports = function() {
	var resourceDir = 'src/main/webapp';
	var appDir = resourceDir + "/app";
	var jsFiles = appDir + "/**/*.js";
	var indexFile = resourceDir + "/index.html";
	var config = {
			appDir : appDir,
			jsFiles: jsFiles,
			indexFile: indexFile
	};
	
	return config;
};