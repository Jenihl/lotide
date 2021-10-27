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

  const middle = function(array) {
    //For arrays with one or two elements, there is no middle. Return an empty array.
    if(array.length < 3) {
      return [];
    } else if(array.length  % 2 === 1) {//odd number of elements 
      return[array[Math.floor(array.length / 2)]]; //array.length/2 to get to the middle..math.floor ?
    } else if (array.length % 2 === 0) { //even number of elements
    return[array[Math.round(array.length / 2) -1 ],
    array[Math.round(array.length / 2)]
    ]}
  }
 
  console.log(middle([1, 2, 3, 4])) // => [2, 3]
  console.log(middle([1, 2, 3, 4, 5, 6]))