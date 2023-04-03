
function printName () {
    const helloName = "Hello Jhon"
    function inner () {
        console.log(helloName)
    }
    return inner
}





setTimeout(printName(),1000)
