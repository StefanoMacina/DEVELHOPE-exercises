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
}

// creare nuova classe che eredita dalla principale

class Student extends Person{                    // usare EXTENDS per ereditare da Person
    constructor(name, age, nationality,  subject) {    //includere gli stessi parametri di Person nella nuova classe + il nuovo parametro di Student
        super(name, age, nationality)           // parametri ereditati da Person
        this.subject = subject          // nuovo parametro in Student
    }
}

let Susan = new Student("Susan" , 35, "UK" , "English")
console.log(Susan.__proto__) */

//PROTOTYPE CHAIN

//La prototype chain tiene traccia di quali oggetti in js ereditano da altri oggetti

//Object -> Person class -> Student class
// Person estende la classe base-object e student estende quella di person
// quindi student è un prototype di Person e person è prototype di object

//Prototype chain

//Student -> Person -> Object -> null prototype(obj) -> null

//per mostrare il prototype(genitore) di una classe :

//------> console.log(nome-classe.__proto__) <--------

// CLASS FIELDS

//Le class fields servono per rendere la classe più facile da leggere
//e permettono di far capire subito che parametri prende la classe
//es.

/* class Person{
    name;                   //
    age;                    //Includere questi campi rende immediatamente comprensibile cosa prende la classe
    nationality;            //è possibile assegnare a questi valori dei valori di defaul
    constructor(name, age, nationality){
        this.name = name;
        if(typeof(age) === "number") {
            this.age = age
        } else {
            this.age = Number(age)
        }
        this.nationality = nationality
    }
}

let Susan = new Person ("susan" , 35 , "UK")
console.log(Susan)
 */

//ASSEGNARE VALORI DI DEFAULT AD UNA CLASSE
//es.
// impostare parametri di defaul nel caso in cui durante la costruzione non vengano inseriti

/* class Person {
    name = " ";
    age = " ";
    nationality = "Ucrain";
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let Bianca = new Person("susan" , 32, )
console.log(Bianca) */

//STATIC PROPERTIES AND METHODS

//Le static properties e gli static methods sono legati ad una classe, non importa se non
//si crea un'istanza di quella classe
//es.

/* class Person {
    name = "";
    age = "";
    nationality = "";
    
    static nationalityArr = ["US","UK","AUS","CAD"]   //         <-------- STATIC PROPERTY DELLA CLASSE Person  

    constructor(name, age, nationality){
    this.name = name;
        if(typeof(age) === "number"){
            this.age = age;
        } else {
            this.age = Number(age);
        }
        this.nationality = nationality 
    }

    static validNationality(nat = ""){
        return Person.nationalityArr.reduce(
            (prev , curr) => prev || curr === nat ,  false);   // <-------- STATIC METHOD della classe Person, ritorna TRUE se nat è presente in nationalityArr
    }
}

console.log(Person.validNationality("US")) */







                                                                //GETTERS & SETTERS

                                        // Permettono di "Prendere" un valore (GET) o 
                                        //"impostare" un valore (SET) di un oggetto

//ESEMPIO SENZA GETTER E SETTER:

/* let user = {

    firstName : "",
    lastName : "",
    fullname : function() {            //usare funzione per restituire il nome intero 
        return this.firstName + " " + this.lastName
    }
} */

/* user.firstName = "Bob";           //impostare nome e cognome 
user.lastName = "Synclair"
console.log(user.fullname())   */     //e restituire il nome intero invocando una funzione



//ESEMPIO USANDO GETTER E SETTER  IN UN OGGETTO

/* let user = {

    firstName : "",
    lastName : "",


    set first(value){                   //il valore value viene impostato sotto usando user.first
        this.firstName = value          //il valore value viene impostato sotto usando user.last
    },                                  //i valori sono modificabili direttamente inserendo qualcosa dopo "VALUE" es. value.uppercase
    set last(value){
        this.lastName = value
    },


    get fullname() {            
        return this.firstName + " " + this.lastName
    }
}
 */
/* user.first = "Bob";           
user.last = "Synclair"
console.log(user.fullname)  
 */




//ESEMPIO USANDO GETTER E SETTER IN UNA CLASSE

/* class User  {
    constructor(first, last) {
        this.first = first;
        this.last = last
    }

    set first(value){                   
        this.firstName = value          
    }                                
    set last(value){
        this.lastName = value.toUpperCase()
    }

    get fullname() {            
        return this.firstName + " " + this.lastName
    }
} */



/* let user1 = new User ("spongebob",  "squarepants")
let user2 = new User ("Patrick",  "squarepants") */


/* console.log(user1.fullname)
console.log(user2.fullname)   */

