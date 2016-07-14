var cs = require('./caesarShift')

var plaintext = process.argv[2];
var shiftNum = parseInt(process.argv[3]);

console.log(cs(plaintext,shiftNum));
