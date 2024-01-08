// Primitive  

// 7 type : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100  //Number datatype
const scoreValue = 100.3  //Number Datatype

const isLoggedIn = false //boolean datatype
const outsideTemp = null //null datatype

let userEmail; //undefined

const id = Symbol('123') //symbol datatype
const anotherId = Symbol('123') //symbol datatype

console.log(id == anotherId);

//const bigNumber = 345682465874n //Bigint datatype

// Reference (Non Primitive)

// --> Array, Object, Functions

const heros = ("Shaktiman", "doga", "Naagraj")

let myObj = {

    name: "Sonu",
    age: 22,
}

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof myFunction);

console.log(typeof heros);
console.log(typeof myObj);


//++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myInstauserId = "sonu_kumr09"

let anothername = myInstauserId
anothername = "Sonu Kumar"

console.log(myInstauserId);
console.log(anothername);

let userOne = {
    email: "user@example.com",
    upi: "user@apl"

}

let userTwo = userOne
userTwo.email = "sonu@example.com"

console.log(userOne.email);
console.log(userTwo.email);