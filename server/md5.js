const crypto=require('crypto');

let obj=crypto.createHash('md5');
obj.update('jinanvljiangnajk123456');

console.log(obj.digest('hex'));
