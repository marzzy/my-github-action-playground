var fs = require('fs');

fs.readFile('./coverage/coverage-summary.json', 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
  } else {
  let obj = JSON.parse(data); // parse the coverage
  console.log(obj.total)
}});