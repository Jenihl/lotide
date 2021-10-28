const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} === ${expected}`);
  }
}

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


/*First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
As soon as there is not a match, we can return false
Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)*/ 
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




const helloGoodbye = { hello: "first", goodbye: "second"};
const goodbyeHello = { goodbye: "second", hello: "first"};
const onlyHello = { hello: "first" };

    

assertEqual(eqObjects(helloGoodbye, goodbyeHello), true);
assertEqual(eqObjects(helloGoodbye, onlyHello), false);