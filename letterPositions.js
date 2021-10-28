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

const letterPositions = function(sentence) {
  const results = {};
  let counter = -1;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        counter += 1;
        results[letter].push(counter);
      } else {
        counter += 1;
        results[letter] = [counter];
      }
    } else {
      counter += 1;
    }
  }
  return results;

};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house")["g"], [2]);
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);