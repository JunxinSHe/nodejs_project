const path=require('path');
module.exports={
  DB_HOST:'localhost',
  DB_USER:'norris',
  DB_PASS:'hobby1515',
  DB_NAME:'cpts',

  PORT: 8080,

  ADMIN_PREFIX: 'jinanvljiangnajk',

  HTTP_ROOT: 'http://localhost:8080',

  UPLOAD_DIR: path.resolve(__dirname, './static/upload'),
}
