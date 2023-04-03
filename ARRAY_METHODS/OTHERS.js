//----------------------  Exercise 1 : Filtering an Array of Numbers
//
//  Your task is to write a function that takes this array as input and returns a new array containing only the even numbers

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function evenNumbers(arg){
    const filtered = arg.filter(el => el % 2 === 0) 
    console.log(filtered)
}

evenNumbers(numbers) */

//-------------------- Exercise 2: Filtering an Array of Objects by Property Value
//
//  Your task is to write a function that takes this array and a category name as input
//  and returns a new array containing only the products that belong to the specified category

/* const products = [
  { name: "T-shirt", price: 20, category: "Clothing" },
  { name: "Jeans", price: 50, category: "Clothing" },
  { name: "Headphones", price: 100, category: "Electronics" },
  { name: "Smartphone", price: 500, category: "Electronics" },
  { name: "Book", price: 10, category: "Books" },
];


function filtering(products, category){
  console.log(products.filter(product => product.category === category))
}

filtering(products, "Electronics") */


//-------------------- Exercise 3: FIltering for odd numbers:

//Given an array of numbers, write a function that returns a new array containing only the odd numbers.


/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0)
}


const oddNumbers = filterOddNumbers(numbers);

console.log(oddNumbers);
// Output: [1, 3, 5, 7, 9] */



//-------------------- Exercise 4: Filtering for first letter:

//  Given an array of strings, write a function that returns a new array containing only the strings that start with a specific letter.

/* const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function filterFruitsStartingWith(fruits, letter) {
  return fruits.filter(fruit => fruit.startsWith(letter))
}

const filteredFruits = filterFruitsStartingWith(fruits, "c");

console.log(filteredFruits);
// Output: ["cherry"]
 */



//-------------------- Exercise 5: Filtering for people age:
// Given an array of objects representing people, write a function that returns a new array containing only the people who are older than a certain age.

/* const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Dave", age: 40 },
  { name: "Emma", age: 45 }
];

function filterPeopleByAge(people, age) {
  return people.filter(person => person.age >= age)
}

const filteredPeople = filterPeopleByAge(people, 35);

console.log(filteredPeople);
// Output: [
//   { name: "Charlie", age: 35 },
//   { name: "Dave", age: 40 },
//   { name: "Emma", age: 45 }
// ] */



//-------------------- Exercise 6: Filtering for some criteria :
// Given an array of objects representing books, write a function that returns a new array containing only the books that meet certain criteria.

// The criteria are:

// The book's author is a specific person.
// The book's publication date is after a certain year.
// The book's title contains a specific string.

/* const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationDate: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationDate: 1960 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", publicationDate: 1951 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", publicationDate: 1937 },
  { title: "1984", author: "George Orwell", publicationDate: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationDate: 1813 }
];

function filterBooks(books, author, minPublicationDate, searchString) {
  return books.filter(book =>
    book.author === author &&
    book.publicationDate === minPublicationDate  &&
    book.title.includes(searchString))
}

const filteredBooks = filterBooks(books, "J.D. Salinger", 1950, "Catcher");

console.log(filteredBooks);
// Output: [{ title: "The Catcher in the Rye", author: "J.D. Salinger", publicationDate: 1951 }] */




 
// /-------------------- Exercise 6: fizz buzz
// given an array of numbers return fizz + number if the number is even , return buzz if numbers is odd using ternary operator and foreach cycle

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 

function fizzBuzz(arg){
  arg.forEach(num => {
    num % 2 === 0 ? console.log(`${num} even`) :  console.log(`${num} odd`)
  });
}


fizzBuzz(numbers)
 */



// /-------------------- Exercise 6: fizz buzz
// / given an array of numbers create a function that square only the odd numbers using filter and map methods


/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function multiply(arg){
  const odd = arg.filter(num => num % 2 !== 0)
  const multiplied = odd.map(numb => numb ** 2)
  console.log(multiplied)
}


multiply(numbers) */




// ------------------------ Exercise 7 : create a new array

// Given an array of objects representing people, create a new array that contains objects with the name and age properties of each person, 
// where the age property is calculated based on the birthYear property of the person object.

/* const people = [
  { name: "Alice", birthYear: 1990 },
  { name: "Bob", birthYear: 1985 },
  { name: "Charlie", birthYear: 1978 },
];

function getAge(people) {
  const currentYear = new Date().getFullYear();
  return people.map(person => {
    const age = currentYear - person.birthYear;
    return { name: person.name, age };
  });
}

console.log(getAge(people)) */



// --------------------------  Exercise 8 

// Exercise: Given an array of numbers, create a new array where each number is multiplied by its index in the original array.

/* const numbers = [1, 2, 3, 4, 5];


const multiplied = numbers.map(num => num * numbers.indexOf(num))

console.log(multiplied) */




// --------------------------- Exercise 9

// Given an array of numbers, create a new array where each number is converted to a string and has a dollar sign added to the beginning.


/* const numbers = [10, 20, 30, 40, 50];

const converted = numbers.map(num => "$" + num.toString() 
)

console.log(converted)
// Output: ["$10", "$20", "$30", "$40", "$50"] */


// --------------------------- Exercise 10

// Given an array of objects representing users, create a new array with only the users who are over 18 years old.


// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
//   { name: "Dave", age: 15 },
//   { name: "Eve", age: 22 }
// ];



// function adult(arg){
//   return arg.filter(element => element.age >= 18)
  
// }


// console.log(adult(users))
// // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }, { name: "Eve", age: 22 }]




// --------------------------- Exercise 11

// Scrivere una funzione denominata average In questo modo viene presa una matrice di numeri come argomento e viene restituita la media di tutti i numeri
//  nella matrice. La funzione deve arrotondare il risultato a due cifre decimali.

/* const arr = [1, 2, 3, 4, 5];

function average(arg){
  let sum =  arg.reduce((acc , curr) => acc + curr)
  let avg = sum / arg.length
  return avg.toFixed(2)
}

console.log(average(arr)) */
	


// --------------------------- Exercise 12
// Scrivi un codice che restituisca la somma delle età di tutti gli utenti,
//  utilizzando il metodo reduce().

/* const utenti = [
  { nome: 'Mario', eta: 27, sesso: 'M' },
  { nome: 'Luca', eta: 31, sesso: 'M' },
  { nome: 'Giulia', eta: 22, sesso: 'F' },
  { nome: 'Sara', eta: 18, sesso: 'F' },
  { nome: 'Antonio', eta: 39, sesso: 'M' }
];


  const totalAge = utenti.reduce((acc, curr) => acc + curr.eta,0)
  

console.log(totalAge); */




function saluta (){
  console.log("ciao")
}

let timer = setInterval(saluta , 1000);


setTimeout (() => {clearInterval(timer), console.log("stop")}, 5000)

/* let timerID = setInterval(() => console.log("ciao"), 1000);

setTimeout(() => {clearInterval(timerID); console.log("stop")}, 5000)
 */
