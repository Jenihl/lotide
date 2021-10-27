const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} === ${expected}`);
  }
}
  ;

  function eqArrays(firstArray, secondArray){
    if(firstArray.length !== secondArray.length) {
      return false;
    }
for(let i = 0; i < firstArray.length; i++) {
  if(Array.isArray(firstArray[i]) && (eqArrays(firstArray[i], secondArray[i] === false))) {
    return false;
  }
  if(!(Array.isArray(firstArray[i])) && firstArray[i] !== secondArray[i]) {
    return false;
  }
}
return true;
  }

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
