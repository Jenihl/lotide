const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} === ${expected}`);
  }
}
 

const countLetters = function (string) {
  letterCount = {};
//for of loop
  for (const letter of string) {
  if (letter !== " ") {// do not count spaces
    if (letterCount[letter]) {//if empty object has letter anywhere in string
      letterCount[letter] += 1; //add it
    } else {
      letterCount[letter] = 1; //or else its just 1
    }
  }
}
  return letterCount;
}
countLetters("Hello World")
console.log(countLetters("Hello World"))