/* function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
} */



function sum(...rest){
    let sum = 0;
    rest.forEach(el => {
        sum += el
    });
    return sum
}

console.log(sum(1, 2, 3, 4, 5));