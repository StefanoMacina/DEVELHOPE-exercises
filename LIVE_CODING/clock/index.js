const clock = document.querySelector("#clock");



function interval(){
    const today =  new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    clock.innerText = `${hour} : ${minutes} : ${seconds}`;
}

const id = setInterval(() => {
    interval()
    console.log("in corso")
 }, 1000)




setTimeout(() => {
    clearInterval(id)
    console.log("orologio stoppato")
},5000)