const eqObjects = function(object1, object2) {
  let arrayOfKeys1 = Object.keys(object1);
  let arrayOfKeys2 = Object.keys(object2);
  if (arrayOfKeys1.length !== arrayOfKeys2.length) {
    return false;
  }
  for (const value of arrayOfKeys1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value]);
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(a,b) {
  const inspect = require('util').inspect; 
  if (eqObjects(a,b)) {
    console.log(`✅ Assertion Passed: ${inspect(a)} === ${inspect(b)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(a)} !== ${inspect(b)}`);
  }
};



let objectOne = {
  key1: "Dog",
  key2: "Cat",
 
};

let objectTwo = {
  key1: "Dog",
  key2: "Cat",
};

assertObjectsEqual(objectOne, objectTwo);