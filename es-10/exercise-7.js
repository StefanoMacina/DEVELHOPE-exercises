function sumUntil(maxValue) {
  count = 0
  for(let i = 0 ; i <= maxValue ; i++){
    count += i
  }
  return count
}

console.log(sumUntil(5));