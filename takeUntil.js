
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

const takeUntil = function(array, callback) { //loops thru array until it finds a truthy value
  let results = [];
  for (let item of array) {
    if (!callback(item)) { //if anywhere in looping is not in the array
      results.push(item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //results1 is var name. -> data1 is array -> passed a callback--
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ] )