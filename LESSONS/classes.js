/* CLASSES INTRO*/

//inizializzare nuova classe "Person" che contiene dei parametri "name , age , nationality"


/* class Person {
    constructor(name, age, nationality) {
        this.name = name;
        if(typeof(age) == "number"){
            this.age = age;
        } else {
            this.age = Number(age);
        }
        this.nationality = nationality
    }
} */


// creare nuove istanze della classe Person definendo i parametri 

/* let greg = new Person ("greg" , 28, "US")
console.log(greg)

let stefano = new Person("Stefano" , "23" , "ITA")
console.log(stefano) */


/*CLASSES INHERITANCE*/

// per includere maggiori informazioni alla classe es. class person, student, worker, ecc 
// creare una classe Person principale e nella successiva classe STUDENT usare EXTEND per far ereditare a STUDENT i parametri di PERSON

class Person {
    constructor(name, age, nationality) {
        this.name = name;
        if(typeof(age) == "number"){
            this.age = age;
        } else {
            this.age = Number(age);
        }
        this.nationality = nationality
    }
}



class Student extends Person{                    // usare EXTENDS per ereditare da Person
    constructor(name, age, nationality,  subject) {    //includere gli stessi parametri di Person nella nuova classe + il nuovo parametro di Student
        super(name, age, nationality)           // parametri ereditati da Person
        this.subject = subject          // nuovo parametro in Student
    }
}

let Susan = new Student("Susan" , 35, "UK" , "English")
console.log(Susan)