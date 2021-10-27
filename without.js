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

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  console.log("These arrays are equal!")
}
assertArraysEqual([1,2,3],[4,2,3])

const without = function(source, itemstoRemove) {
  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemstoRemove.length; j++) {
      if(source[i] === itemstoRemove[j]) {
        source.splice(i, 1)
      }
    }
  }
  console.log(source)
  return source
}

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(words)