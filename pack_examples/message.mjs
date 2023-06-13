// require non è disponibile in mjs
import clc from 'cli-color'

function outputMessage(msg) {
    console.log(clc.bgYellow(`the message is : ${msg}`));
}

outputMessage('hey hey')