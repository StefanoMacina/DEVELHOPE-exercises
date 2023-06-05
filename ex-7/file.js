const { dir } = require('console');
const fs = require('fs')

const data = 'hello world';

fs.writeFile('message.txt', data, (err) => {
  if(err){
    console.log(err);
    dir(err)
    return
  }
  console.log('file has been created');
})