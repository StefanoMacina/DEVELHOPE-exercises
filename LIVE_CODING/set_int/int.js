
function printString(string) {
    console.log(string);
  }



function func(callback, string) {
  setTimeout(() => {
    callback
    },1000);
  setTimeout(() => {
    console.log(string);
  }, 2000);
}



func(printString("Hello"), "Mario");
