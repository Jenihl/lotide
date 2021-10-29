
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  console.log("These arrays are equal!")
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



const words = ["ground", "control", "to", "major", "tom"]; //param in assertArrays

const map = function(array, callback) {
const results = [];
for(let item of array) {
  results.push(callback(item));
}
return results;
}

const results1 = map(words, word => word[0]); //callback, 2nd param

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word + ' ' + 'test')
assertArraysEqual(results2, ["ground test", "control test", "to test", "major test", "tom test"]);

const results3 = map(words, word => word.length)
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

const results4 = map(words, word => word[4])
assertArraysEqual(results4, ['n','r', undefined, 'r', undefined]);
