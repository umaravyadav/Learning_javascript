let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//console.log(Num.l)



const marvelheroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye    "]; 
const dcheroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];       


//marvelheroes.push(dcheroes);
// concat is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//const allHeroes = marvelheroes.concat(dcheroes);
//console.log(allHeroes);


// spread operator
// const allHeroes = [...marvelheroes, ...dcheroes]; 
// console.log(allHeroes);s


const anotherArry =[1,2,3,[4,5],90,[6,7,[8,9]]];

const flatArray = anotherArry.flat(Infinity); // flat method is used to flatten the array. It takes a depth parameter which specifies how deep a nested array should be flattened. Infinity means it will flatten all levels of nested arrays.
//console.log(flatArray);




//console.log(Array.isArray("Umarav"));
//console.log(Array.from("Umarav"));
//console.log(Array.from({name:"Umarav"}));  //intrsting case, it will return an empty array because the object does not have a length property. Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.  

let score = 100
let score2 = 200
let score3= 300

console.log(Array.of(score, score2, score3)); // Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. It is used to create an array from a set of values. 





