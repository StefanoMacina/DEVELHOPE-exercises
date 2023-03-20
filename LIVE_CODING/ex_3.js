//creare una funzione che avrà un parametro
//trovare quante volte un elemento si trova in un array

function func(a, b) {
  let counter = 0;
  a.forEach((el) => {
    if (el == b) {
      counter++;
    }
  });
  return `${b} è stato trovato ${counter} volte`;
}

console.log(func([1, 1, 1, 3, 4], 1));
