const figlet = require('figlet')
const fs = require('fs')

const file = fs.readFileSync('./Command-line art.txt' ,'utf8')

figlet.text(
    file,
    {
        font: "Crazy",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      },
      function (err, data){
        if(err){
            console.log('error');
            console.dir(err)
            return
        }
        console.log(data);
      }
)