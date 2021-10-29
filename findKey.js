

  /* Implement the function findKey which takes in an object and a callback. 
  It should scan the object and return the first key for which the callback returns a truthy value.
   If no key is found, then it should return undefined.*/

   const findKey = function (object, callback){
    for (let item in object) {
      if(callback(object[item])) {
        return item
      }
      }
    };
      
     
        const assertEqual = function(actual, expected) {
      if (actual === expected) {
        console.log(`✅ Assertion passed: ${actual} === ${expected}`);
      } else {
        console.log(`🛑 Assertion failed: ${actual} === ${expected}`);
      }
    }
      ;



  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma");

// Assertion passes and returns undefined if the key passed in the function is incorrect and undefined is the expected result in the 
// Assertion function.
console.log(assertEqual(findKey ({
    "Blue Hill": { stars : 1 },
    " Akaleri" : { stars : 3 },
     "noma" :    { stars : 2 },
     "elBulli" : { stars : 2 },
     "Akelarre": { stars : 3 }
}, x => x.stars === 4), undefined))