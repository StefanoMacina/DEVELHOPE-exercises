const { dir } = require('console');
const fs = require('fs')
const fig = require('figlet')

const data = 'hello world';

fs.writeFile('message.txt', data, (err) => {
  if(err){
    console.log(err);
    dir(err)
    return
  }
  const successTxt = 'file has been created!'

  fig(successTxt , function(err , data){
    if(err){
      console.log(err);
      return
    }
    console.log(data);
  })
})