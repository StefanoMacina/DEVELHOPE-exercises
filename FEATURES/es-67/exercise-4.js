/* function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
 */


function sum(...rest){
  let sum = 0;
  for(let el of rest){
    sum += el
  }
  return sum
}


const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2],));


