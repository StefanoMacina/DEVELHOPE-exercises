const someTask = new Promise(function(resolve, reject){

    setTimeout(() => {
        resolve('this is some data')
    }, 2000);

})

someTask.then(
    function(value ){
        console.log('value:', value);
        console.log(('sometask:',someTask));
    },
    function(reason ){
        console.log('reason:', value);
        console.log(('sometask:',someTask));
    }
)