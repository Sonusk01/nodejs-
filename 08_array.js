//Array

const myArr = [4,8,5,6]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(5,6,8,9)
//console.log(myArr);
//console.log(myArr2);
//console.log(myHeors);

//Array Methods

 //myArr.push(6) // push is used to push the value from last in the array
 //console.log(myArr);

// myArr.push(8)
// console.log(myArr);

 //myArr.pop() //pop is used to pop the value from the last in the array
 //console.log(myArr);
  
//myArr.unshift(9)  //unshift is used to put the value first position in the Array
//console.log(myArr);

//myArr.shift() // shift is used to pop the value from first position
//console.log(myArr);

// console.log(myArr.includes(9)); //to find the value in the array
// console.log(myArr.includes(19)); //boolean
// console.log(myArr.indexOf(5)); // to find the index of any value in the array

// const newArr = myArr.join() // to change the value into string value we use join
// console.log(myArr);
// console.log(newArr);

// *************slice and splice of the array *************//

newArr2 = [0, 1, 2, 3, 4, 5]

console.log("A =", newArr2)

const myn1 = newArr2.slice(1, 3)
console.log(myn1); // slice mai range count nhi hota hai 
console.log("B=", newArr2);

const myn2 = newArr2.splice(1, 3) // splice mai range count hoti hai aur range wali value array se nikal jaati hai
console.log("C=", newArr2);
console.log(myn2);




