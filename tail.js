const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} === ${expected}`);
  }
};

//method .slice returns new array, slices from index thats given (1) to the end of the given array. so Lighthouse/labs is taken out
const tail = function(array) {
  return array.slice(1);
};
// 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Hello"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);