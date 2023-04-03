arr1 = [1,2,3,4,5];
arr2 = [2,3,4,5,6];




function operator(arg1, arg2){
    const arr3 = [...arg1, ...arg2];
    const arr4 = [];
    arr3.forEach((el) => {
        if(!arr4.includes(el)){
            arr4.push(el)
        }})
        console.log(arr3)
    return arr4
}




console.log(operator(arr1,arr2))


