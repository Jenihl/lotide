const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} === ${expected}`);
  }
}
  ;
//implement a function that can compare two arrays for a perfect match.
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
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
