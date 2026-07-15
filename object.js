// Singleton Pattern
//Constoctor se singleton banat  hai
// object create
//const user = new Object();

//object literal

//const muSumbl = Symbol("muSumbl");
//const jstuser = {
//    name: "Umarav",
//    "Full Name": "Umarav Yadav",
//    [muSumbl]: "mySumbl1",
//
//    age: 30,
//    city: "Jaipur",
//    email:"umaravyadav51@gmail.com",
//    lastloin:["monday","tuesday","wednesday"],
//};

//console.log(jstuser.name);
//console.log(jstuser.email);
//console.log(jstuser["email"]); // This line has a syntax error due to the quotes around email
//console.log(jstuser["Full Name"]); // Accessing property with space in its name
//console.log(jstuser[muSumbl]); // Accessing symbol property
//Object.freeze(jstuser); // Freezing the object to prevent modifications
//console.log(jstuser);


//jstuser.greeting = function(){
//   console.log("Hello Sir");
//}
//
//jstuser.greetingSome = function(){
//   console.log(`hello sir ${this.name}`);
//}
//console.log(jstuser.greeting()); // Calling the greeting method
//console.log(jstuser.greetingSome()); // Calling the greetingSome methods



 const singlrton = new Object();

 singlrton.name = "Umarav";
 singlrton.age = 30;
 singlrton.city = "Jaipur";
 singlrton.email = ""



//  const obj1= {1 : "Umarav", 2: "Yadav"};
//  const obj2 = {3 : "Virendra", 4: "Palawat"};
//  // const obj3 = {obj1, obj2}; // This line creates an object with obj1 and obj2 as properties, not merging them

//  const hshs = Object.assign({}, obj1, obj2); // Merging obj1 and obj2 into a new object
//  console.log(hshs); // Logging the merged object


//const obj1 = {a:1, b:2};
//const obj2 = {c:3, d:4};    

// const obj3 = Object.assign({}, obj1, obj2); // Merging obj1 and obj2 into a new object
// console.log(obj3); // Logging the merged object


//const obj3 = {...obj1, ...obj2}; // Using spread operator to merge obj1 and obj2 into a new object
//console.log(obj3); // Logging the merged object


console.log(Object.keys(singlrton)); // Logging the keys of the singlrton object
console.log(Object.values(singlrton));  
console.log(Object.entries(singlrton)); // Logging the entries (key-value pairs) of the singlrton object

console.log(singlrton.hasOwnProperty("name")); // Checking if the singlrton object has the property "name"