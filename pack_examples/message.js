const clc = require('cli-color')

function outputMessage(msg) {
    console.log(clc.bgYellow(`the message is : ${msg}`));
}

outputMessage('hey hey')