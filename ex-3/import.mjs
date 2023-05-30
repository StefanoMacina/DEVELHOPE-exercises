import person1 from './export.mjs';

const hello = (arg) => {
    console.log(`hello, my name is ${arg.name}, i'm ${arg.age} years old and i'm a ${arg.student}`);
}

hello(person1)