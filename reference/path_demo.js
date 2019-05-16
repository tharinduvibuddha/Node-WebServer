const path = require('path');

//base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extention name
console.log(path.extname(__filename));

//create path Object
console.log(path.parse(__filename).base);