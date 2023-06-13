import * as fs from 'node:fs'

fs.readFile('file-1.txt', {encoding:'utf-8'}, function(error , data){
    {error ? console.log(error) : console.log(data);}
    
    fs.readFile('file-2.txt', {encoding : 'utf-8'}, function(error2, data2){
        {error2 ? console.log(error2) : console.log(data2);;}
    })
})