var fs = require('fs')
var file=fs.readFileSync(process.argv[2])
var lines = file.toString().split('\n')
var answer=lines.length-1;
// It doesn't make sense, to me, that the length needs 1 subtracted from it. Shouldn't it need 1 added to it?

console.log(answer)