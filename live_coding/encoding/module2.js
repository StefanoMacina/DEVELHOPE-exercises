
const mod1 = require("./module2");
const fs = require("fs");

fs.readFile("./text.txt", 'UTF-8' ,(err, data) => {
  err ? console.log(err) : console.log(data);
});

fs.appendFile('./text.txt' , 'ciao', ( ) => {
   console.log('file was written');
})