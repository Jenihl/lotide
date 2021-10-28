const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} === ${expected}`);
  }
}
/*Implement the function findKeyByValue which takes in an object and a value. 
It should scan the object and return the first key which contains the given value. 
If no key with that given value is found, then it should return undefined.*/

const findKeyByValue = function (obj, value) { //obj is passed thru with const bestTVshows below
const keys = Object.keys(obj);//store key with method object.keys in (obj) thats passed, first paraam
let index = 0; //initialize counter
for (let element in obj){ //loop through the object passed in
  if(obj[element] === value) { //if element(index, loop) find anything in obj passed in and its the same as value, anoter param passed in below
    return keys[index]; //then return the key value with count of 0
  }
index++; //but then add it
}
return undefined; //otherwise if its not there then undefined
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);