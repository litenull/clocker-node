var clocker = require('./index');

clocker('list', function(err, stdout) {
  if (err) {
    return console.log(err.toString());
  }

  console.log(stdout);
});