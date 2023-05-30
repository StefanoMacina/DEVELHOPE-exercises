import person1 from './export.mjs';

const hello = (person) => {
    console.log(`Hello, i am ${person.name}, i'm ${person.age} years old and i'm a ${person.job}`)
}

hello(person1)