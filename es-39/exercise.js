function multiplyByTwo(value) {
  let number = 2;
    function inner() {
      result = value * number
      return result
  }
  return inner
}
console.log(multiplyByTwo(4)())




