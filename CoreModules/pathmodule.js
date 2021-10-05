const { extname } = require('path');
const path = require('path');

// console.log(path.basename('C:\\temp\\myfile.html'))
console.log(path.win32.basename('C:\\temp\\myfile.html'))
console.log(path.win32.basename('C:\\temp\\myfile.html','.html'))
// console.log(path.delimiter)
// console.log(process.env.PATH.split(path.delimiter))
// console.log(path.dirname('C:\\temp\\myfile'))
// console.log(path.extname('C:\\temp\\myfile.html'))
// console.log(path.isAbsolute('C:\\temp\\myfile'))
// console.log(path.format({
//     root: '/',
//     name: 'myfile',
//     ext: '.txt'
// }))
console.log(path.join('adeel','chaudhary','nodejs','is',"easy"))

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))
// console.log(path.parse('/foo/bar//baz/asdf/quux/myfile.html'))
// console.log(path.posix)
console.log(path.relative("from","to"))

