var exec = require('child_process').exec,
    child;

module.exports = function(arg, callback) {
	child = exec('clocker ' + arg,
	  function (error, stdout) {
	  	if (error) {
	  		return callback(error);
	  	}

			return callback(null, stdout);	  	
	});
}