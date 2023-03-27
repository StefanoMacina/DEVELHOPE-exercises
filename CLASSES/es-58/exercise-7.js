class Person {
  constructor(first, last, age){
    this.first = first;
    this.last = last;
    if(typeof(age) === "number"){
      this.age = age
    } else {
      this.age = Number(age)
    };
  }

    set first(value){
      this.firstName = value
    }
    set last(value){
      this.lastName = value
    }
    set age(value){
      this.ages = value
    }
    get fullName(){
      return `${this.firstName} ${this.lastName} is ${this.ages} years old`
    }
  }


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);