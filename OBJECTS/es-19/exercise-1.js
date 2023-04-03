const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;



// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon"

/*non si è creato un nuovo oggetto "person2" ma si è assegnato
alla variabile person2 il valore person1*/

console.log(person1);
console.log(person2);
