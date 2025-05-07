const path = require('path'); 
const myPath = 'C:\Users\Shefat\Desktop\node.js\Server & Core Modules';
console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.parse(myPath));
console.log(path.extname(myPath));
console.log(path.format({
    root: 'C:',
    dir: 'C:',
    base: 'UsersShefatDesktop\node.jsServer & Core Modules',
    ext: '.jsServer & Core Modules',
    name: 'UsersShefatDesktop\node'
  })); // give from parse method 